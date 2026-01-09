import React from 'react';
import './Hero.css';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Yenilemeye hazır müşterileriniz siz fark etmeden rakibe mi gidiyor?
        </h1>
        <p className="hero-subtitle">
          Sigorta acenteleri için geliştirilmiş CRM ile yenileme, transfer ve satış fırsatlarını tek ekranda yönetin.
        </p>
        <button className="cta-button" onClick={onCtaClick}>
          👉 Ücretsiz Demo Talep Et
        </button>
      </div>
    </section>
  );
};

export default Hero;
