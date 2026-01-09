import React from 'react';
import './TargetAudience.css';

const TargetAudience: React.FC = () => {
  const audiences = [
    '1–10 personelli sigorta acenteleri',
    'Excel + WhatsApp kullananlar',
    'Yenileme oranını artırmak isteyenler',
    'Satışçı performansını görmek isteyenler',
  ];

  return (
    <section className="target-audience">
      <div className="container">
        <h2>Kimler İçin?</h2>
        <div className="audience-list">
          {audiences.map((audience, index) => (
            <div key={index} className="audience-item">
              <span className="check-icon">✓</span>
              <span>{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
