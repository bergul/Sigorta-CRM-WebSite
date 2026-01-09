import React from 'react';
import './Modules.css';

const Modules: React.FC = () => {
  const modules = [
    {
      icon: '📊',
      title: 'Akıllı Dashboard',
      features: [
        'Bugün aranacak müşteriler',
        'Yaklaşan yenilemeler',
        'Açık satış fırsatları',
      ],
    },
    {
      icon: '👥',
      title: 'Müşteri & Poliçe Yönetimi',
      features: [
        'Bireysel / kurumsal müşteri kartları',
        'Poliçe geçmişi',
        'Yenileme tarihleri',
      ],
    },
    {
      icon: '📋',
      title: 'Satış Pipeline (Kanban)',
      features: [
        'Lead → Teklif → Satış',
        'Transfer fırsatları görünür',
      ],
    },
    {
      icon: '✨',
      title: 'Teklif Sihirbazı',
      features: [
        '2 dakikada teklif',
        'PDF çıktı',
        'WhatsApp paylaşımı',
      ],
    },
    {
      icon: '💳',
      title: 'Tahsilat & Komisyon',
      features: [
        'Ödeme durumu',
        'Bekleyen tahsilatlar',
        'Komisyon takibi',
      ],
    },
  ];

  return (
    <section className="modules">
      <div className="container">
        <h2>Temel Modüller</h2>
        <p className="section-subtitle">MVP Seviyesi</p>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className="module-card">
              <span className="module-icon">{module.icon}</span>
              <h3 className="module-title">{module.title}</h3>
              <ul className="module-features">
                {module.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
