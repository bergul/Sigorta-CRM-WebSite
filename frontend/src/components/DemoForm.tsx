import React, { useState, FormEvent, ChangeEvent } from 'react';
import './DemoForm.css';

interface FormData {
  adSoyad: string;
  acenteAdi: string;
  telefon: string;
  email: string;
}

interface DemoFormProps {
  id?: string;
}

const DemoForm: React.FC<DemoFormProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>({
    adSoyad: '',
    acenteAdi: '',
    telefon: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(process.env.REACT_APP_API_URL || 'http://localhost:3001/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Demo talebiniz başarıyla alındı!');
        setFormData({ adSoyad: '', acenteAdi: '', telefon: '', email: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası, lütfen tekrar deneyin.');
    }
  };

  return (
    <section className="demo-form" id={id}>
      <div className="container">
        <h2>Ücretsiz Demo Talep Et</h2>
        <p className="form-subtitle">Satın alma zorunluluğu yoktur.</p>

        {status === 'success' ? (
          <div className="success-message">
            <span className="success-icon">✅</span>
            <p>{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="adSoyad">Ad Soyad</label>
              <input
                type="text"
                id="adSoyad"
                name="adSoyad"
                value={formData.adSoyad}
                onChange={handleChange}
                required
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="form-group">
              <label htmlFor="acenteAdi">Acente Adı</label>
              <input
                type="text"
                id="acenteAdi"
                name="acenteAdi"
                value={formData.acenteAdi}
                onChange={handleChange}
                required
                placeholder="Acente adınız"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon</label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
                placeholder="5XX XXX XX XX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ornek@email.com"
              />
            </div>

            {status === 'error' && (
              <div className="error-message">{message}</div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Gönderiliyor...' : '👉 Ücretsiz Demo Talep Et'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoForm;
