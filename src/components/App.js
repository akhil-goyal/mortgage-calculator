// Packages
import React from 'react';

// Components
import Header from 'components/header/Header';
import Calculator from 'components/calculator/Calculator';
import Results from 'components/results/Results';

// Contexts
import { CalculatorContext } from 'contexts/calculator-context';

const App = () => {
  return (
    <div className="App">
      <Header />

      <CalculatorContext>
        <Calculator />
        <Results />
      </CalculatorContext>
    </div>
  );
}

export default App;
