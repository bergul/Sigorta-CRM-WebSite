import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: '1️⃣', text: 'Müşteri sisteme girilir' },
    { number: '2️⃣', text: 'Poliçe & yenileme tarihi tanımlanır' },
    { number: '3️⃣', text: 'Sistem zamanı gelince uyarır' },
    { number: '4️⃣', text: 'Teklif hazırlanır' },
    { number: '5️⃣', text: 'WhatsApp\'tan gönderilir' },
    { number: '6️⃣', text: 'Satış & tahsilat takip edilir' },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>Ürün Nasıl Çalışır?</h2>
        <p className="section-subtitle">Basit ve etkili akış</p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <span className="step-number">{step.number}</span>
              <span className="step-text">{step.text}</span>
            </div>
          ))}
        </div>
        <p className="tagline">"Acentenin unutmasını engelleyen bir satış ekranı"</p>
      </div>
    </section>
  );
};

export default HowItWorks;
