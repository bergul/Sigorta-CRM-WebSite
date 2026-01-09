import React from 'react';
import './Trust.css';

const Trust: React.FC = () => {
  const trustItems = [
    { emoji: '🇹🇷', text: 'Türkçe arayüz' },
    { emoji: '🇹🇷', text: 'Yerli geliştirme' },
    { emoji: '🔒', text: 'KVKK uyumlu' },
    { emoji: '☁️', text: 'Bulut tabanlı' },
    { emoji: '🧑‍💼', text: 'Acenteler için tasarlandı' },
  ];

  return (
    <section className="trust">
      <div className="container">
        <h2>Güven & Yerellik</h2>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <span className="trust-emoji">{item.emoji}</span>
              <span className="trust-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
