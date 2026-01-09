import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    { emoji: '🔔', text: 'Kaçan yenileme yok' },
    { emoji: '📈', text: 'Transfer fırsatları görünür' },
    { emoji: '🧠', text: 'Bugün kimi aramalıyım net' },
    { emoji: '💬', text: 'Teklif → WhatsApp → Satış' },
    { emoji: '💰', text: 'Tahsilat & komisyon kontrol altında' },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2>Öne Çıkan Faydalar</h2>
        <p className="benefits-subtitle">Özellik değil, sonuç!</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-emoji">{benefit.emoji}</span>
              <span className="benefit-text">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
