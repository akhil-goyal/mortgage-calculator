// Packages
import React from 'react';

// Components
import Header from 'components/header/Header';
import Calculator from 'components/calculator/Calculator';
import Results from 'components/results/Results';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Results />
    </div>
  );
}

export default App;
