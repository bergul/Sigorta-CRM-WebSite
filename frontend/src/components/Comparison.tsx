import React from 'react';
import './Comparison.css';

const Comparison: React.FC = () => {
  const features = [
    { name: 'Yenileme Takibi', sigorta: true, excel: false, genel: false },
    { name: 'Transfer Fırsatları', sigorta: true, excel: false, genel: false },
    { name: 'Satış Pipeline', sigorta: true, excel: false, genel: 'partial' },
    { name: 'Teklif PDF', sigorta: true, excel: false, genel: false },
    { name: 'Sigorta Odaklı', sigorta: true, excel: false, genel: false },
  ];

  const renderStatus = (status: boolean | string) => {
    if (status === true) return <span className="status-yes">✅</span>;
    if (status === 'partial') return <span className="status-partial">⚠️</span>;
    return <span className="status-no">❌</span>;
  };

  return (
    <section className="comparison">
      <div className="container">
        <h2>Rakiplerle Karşılaştırma</h2>
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th className="highlight">Sigorta CRM</th>
                <th>Excel / WhatsApp</th>
                <th>Genel CRM</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="feature-name">{feature.name}</td>
                  <td className="highlight">{renderStatus(feature.sigorta)}</td>
                  <td>{renderStatus(feature.excel)}</td>
                  <td>{renderStatus(feature.genel)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="comparison-tagline">CRM değil, <strong>acente satış sistemi.</strong></p>
      </div>
    </section>
  );
};

export default Comparison;
