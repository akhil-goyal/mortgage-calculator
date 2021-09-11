// Packages
import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from 'components/App';
import Header from 'components/header/Header';
import Calculator from 'components/calculator/Calculator';
import Results from 'components/results/Results';

let wrapped;

// beforeEach will execute before running
// every test in this suite.
beforeEach(() => {
    wrapped = shallow(<App />);
});

it('displays HEADER component', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});

it('displays CALCULATOR component', () => {
    expect(wrapped.find(Calculator).length).toEqual(1);
});

it('displays RESULTS component', () => {
    expect(wrapped.find(Results).length).toEqual(1);
});