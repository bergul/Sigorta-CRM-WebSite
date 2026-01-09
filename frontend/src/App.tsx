import React, { useRef } from 'react';
import {
  Hero,
  ProblemSolution,
  Benefits,
  HowItWorks,
  Modules,
  Comparison,
  TargetAudience,
  Trust,
  DemoForm,
  Footer,
} from './components';
import './App.css';

function App() {
  const demoFormRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Hero onCtaClick={scrollToDemo} />
      <ProblemSolution />
      <Benefits />
      <HowItWorks />
      <Modules onCtaClick={scrollToDemo} />
      <Comparison />
      <TargetAudience />
      <Trust />
      <div ref={demoFormRef}>
        <DemoForm id="demo-form" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
