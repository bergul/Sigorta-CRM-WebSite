import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section with CTA button', () => {
  render(<App />);
  const heroTitle = screen.getByText(/Yenilemeye hazır müşterileriniz/i);
  expect(heroTitle).toBeInTheDocument();
});

test('renders Modules section with new MVP content', () => {
  render(<App />);
  // Check for the new section header
  const sectionHeader = screen.getByText(/Sigorta CRM ile Günlük Acentelik Masanız Tek Ekranda/i);
  expect(sectionHeader).toBeInTheDocument();
  
  // Check for subtitle
  const subtitle = screen.getByText(/Hangi müşteriyi aramalıyım, hangi poliçe yenileniyor, nerede para var/i);
  expect(subtitle).toBeInTheDocument();
  
  // Check for module cards (using getAllByText for elements that appear multiple places)
  expect(screen.getByText(/Akıllı Dashboard/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Yenileme Takibi/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Satış Pipeline/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Teklif Sihirbazı/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/WhatsApp ile Paylaşım/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Tahsilat & Komisyon/i).length).toBeGreaterThan(0);
  
  // Check for CTA button
  const ctaButton = screen.getByText(/Canlı Demoyu Görmek İstiyorum/i);
  expect(ctaButton).toBeInTheDocument();
  
  // Check for closing statement
  expect(screen.getByText(/acente için hazırlanmış bir satış ekranıdır/i)).toBeInTheDocument();
});
