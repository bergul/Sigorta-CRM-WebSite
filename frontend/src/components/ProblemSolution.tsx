import React from 'react';
import './ProblemSolution.css';

const ProblemSolution: React.FC = () => {
  const problems = [
    'Yenileme tarihleri Excel\'de unutuluyor',
    'Transfer fırsatları WhatsApp\'ta kayboluyor',
    'Satışçı kime ne zaman döneceğini bilmiyor',
    'Kaçan her poliçe = kayıp komisyon',
  ];

  return (
    <section className="problem-solution">
      <div className="container">
        <div className="problem-section">
          <h2>🔴 Bugün Acentelerde Yaşanan Gerçekler</h2>
          <ul className="problem-list">
            {problems.map((problem, index) => (
              <li key={index} className="problem-item">
                <span className="problem-icon">❌</span>
                {problem}
              </li>
            ))}
          </ul>
        </div>
        <div className="solution-section">
          <h2>🟢 Biz Ne Yaptık?</h2>
          <p className="solution-text">
            <strong>Sigorta CRM</strong>, acentenin günlük satış ve yenileme masasını tek ekranda toplar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
