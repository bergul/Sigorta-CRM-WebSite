import React from 'react';
import './Modules.css';

interface ModulesProps {
  onCtaClick?: () => void;
}

const Modules: React.FC<ModulesProps> = ({ onCtaClick }) => {
  const modules = [
    {
      icon: '🧠',
      title: 'Akıllı Dashboard',
      headline: 'Bugün Kimi Aramalıyım? Sorusu Ortadan Kalkar',
      description: 'Sigorta CRM, gününüzü sizin yerinize planlar.',
      features: [
        'Yaklaşan yenilemeler',
        'Açık satış & transfer fırsatları',
        'Bekleyen tahsilatlar',
      ],
      result: 'Satışçı ne yapacağını düşünmez, hemen aksiyon alır.',
    },
    {
      icon: '📅',
      title: 'Yenileme Takibi',
      headline: 'Kaçan Poliçe Yok',
      description: 'Tüm poliçeler otomatik olarak yenileme tarihine göre izlenir.',
      features: [
        'Gün / hafta / ay bazlı uyarılar',
        'Önceliklendirilmiş yenilemeler',
      ],
      result: 'Unutulan yenileme yok, daha yüksek yenileme oranı.',
    },
    {
      icon: '📈',
      title: 'Satış Pipeline (Kanban)',
      headline: 'Transfer Fırsatları Gözünüzün Önünde',
      description: 'Lead → Teklif → Satış süreci tek bakışta izlenir.',
      features: [
        'Sürükle–bırak satış adımları',
        'Bekleyen teklifler net görünür',
      ],
      result: '"Unuttum" değil, "takipteyim".',
    },
    {
      icon: '📄',
      title: 'Teklif Sihirbazı',
      headline: '2 Dakikada Profesyonel Teklif',
      description: 'Teklif hazırlamak artık zaman kaybı değil.',
      features: [
        'Ürüne özel alanlar',
        'PDF çıktısı',
        'Markalı, düzenli teklifler',
      ],
      result: 'Hızlı teklif = ilk dönen acente siz olursunuz.',
    },
    {
      icon: '💬',
      title: 'WhatsApp ile Paylaşım',
      headline: 'Teklif Beklemez, Satış Kaçar',
      description: 'Hazırlanan teklif tek tıkla WhatsApp\'tan gönderilir.',
      features: [
        'Müşteri linki açar',
        'PDF\'i anında görür',
      ],
      result: 'Cevap süresi kısalır, satış ihtimali artar.',
    },
    {
      icon: '💰',
      title: 'Tahsilat & Komisyon Takibi',
      headline: 'Paranın Nerede Olduğu Netleşir',
      description: 'Kim ödedi, kim gecikti, hangi poliçeden ne kazandınız — tek panelde.',
      features: [
        'Bekleyen tahsilatlar',
        'Komisyon durumları',
      ],
      result: 'Para akışı kontrol altına girer, sürpriz kalmaz.',
    },
  ];

  return (
    <section className="modules">
      <div className="container">
        <h2>Sigorta CRM ile Günlük Acentelik Masanız Tek Ekranda</h2>
        <p className="section-subtitle">
          Hangi müşteriyi aramalıyım, hangi poliçe yenileniyor, nerede para var — hepsi burada.
        </p>
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className="module-card">
              <div className="module-header">
                <span className="module-icon">{module.icon}</span>
                <h3 className="module-title">{module.title}</h3>
              </div>
              <p className="module-headline">{module.headline}</p>
              <p className="module-description">{module.description}</p>
              <ul className="module-features">
                {module.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <div className="module-result">
                <span className="result-indicator">🟢</span>
                <span className="result-text">👉 {module.result}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="modules-closing">
          <p className="closing-statement">
            Sigorta CRM bir yazılım değil,<br />
            <strong>acente için hazırlanmış bir satış ekranıdır.</strong>
          </p>
          <button className="cta-button" onClick={onCtaClick}>
            👉 Canlı Demoyu Görmek İstiyorum
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modules;
