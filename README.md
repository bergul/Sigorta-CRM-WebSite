# Sigorta CRM Web Site

Sigorta acenteleri için geliştirilmiş CRM sistemi - yenileme, transfer ve satış fırsatlarını tek ekranda yönetin.

## 🚀 Teknoloji Yığını

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Veritabanı**: PostgreSQL

## 📁 Proje Yapısı

```
├── frontend/          # React frontend uygulaması
│   ├── src/
│   │   ├── components/  # React bileşenleri
│   │   ├── App.tsx      # Ana uygulama bileşeni
│   │   └── index.tsx    # Uygulama giriş noktası
│   └── public/          # Statik dosyalar
├── backend/           # Node.js backend API
│   ├── src/
│   │   └── index.ts     # API sunucusu
│   └── .env.example     # Ortam değişkenleri örneği
└── README.md
```

## 🛠️ Kurulum

### Ön Gereksinimler

- Node.js (v18 veya üzeri)
- PostgreSQL (v14 veya üzeri)

### Backend Kurulumu

```bash
cd backend
npm install
cp .env.example .env
# .env dosyasını düzenleyin
npm run dev
```

### Frontend Kurulumu

```bash
cd frontend
npm install
npm start
```

## 🔧 Ortam Değişkenleri

### Backend (.env)

```
DATABASE_URL=postgresql://localhost:5432/sigorta_crm
PORT=3001
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_WHATSAPP_NUMBER=905XXXXXXXXX
```

## 📋 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/health` | Sağlık kontrolü |
| POST | `/api/demo-request` | Demo talebi gönder |
| GET | `/api/demo-requests` | Demo taleplerini listele |

## 🎯 Özellikler

- ✅ Yenileme Takibi
- ✅ Transfer Fırsatları
- ✅ Satış Pipeline
- ✅ Teklif PDF
- ✅ WhatsApp Entegrasyonu
- ✅ Türkçe Arayüz
- ✅ KVKK Uyumlu

## 📄 Lisans

© 2026 Sigorta CRM. Tüm hakları saklıdır.
