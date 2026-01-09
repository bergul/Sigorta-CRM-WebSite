import express, { Request, Response, RequestHandler, Router } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiter configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Çok fazla istek gönderildi, lütfen daha sonra tekrar deneyin.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limit for demo requests
const demoRequestLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 demo requests per hour
  message: { error: 'Çok fazla demo talebi gönderildi, lütfen daha sonra tekrar deneyin.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(cors({
  origin: ['http://185.87.252.113:3000', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use('/api', apiLimiter);

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/sigorta_crm',
});

// Initialize database table
async function initializeDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        ad_soyad VARCHAR(255) NOT NULL,
        acente_adi VARCHAR(255) NOT NULL,
        telefon VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

// Routes
const router = Router();

// Health check
const healthCheck: RequestHandler = (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Sigorta CRM API is running' });
};

// Submit demo request
const submitDemoRequest: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { adSoyad, acenteAdi, telefon, email } = req.body;

    // Validation
    if (!adSoyad || !acenteAdi || !telefon || !email) {
      res.status(400).json({ error: 'Tüm alanlar zorunludur' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Geçerli bir e-posta adresi giriniz' });
      return;
    }

    // Insert into database
    const result = await pool.query(
      'INSERT INTO demo_requests (ad_soyad, acente_adi, telefon, email) VALUES ($1, $2, $3, $4) RETURNING id',
      [adSoyad, acenteAdi, telefon, email]
    );

    res.status(201).json({
      success: true,
      message: 'Demo talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error('Demo request error:', error);
    res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyin' });
  }
};

// Get all demo requests (admin)
const getDemoRequests: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM demo_requests ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Get demo requests error:', error);
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
};

router.get('/health', healthCheck);
router.post('/demo-request', demoRequestLimiter, submitDemoRequest);
router.get('/demo-requests', getDemoRequests);

app.use('/api', router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDatabase();
});

export default app;
