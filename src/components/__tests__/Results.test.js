// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Results from 'components/results/Results';

//  Contexts
import { calculatorValues } from 'contexts/calculator-context';

let wrapped;

beforeEach(() => {

    const data = {
        purchasingPrice: 100,
        deposit: 10,
        mortgageTerm: 2,
        interestRate: 8,
    }

    wrapped = mount(
        <calculatorValues.Provider value={data}>
            <Results />
        </calculatorValues.Provider>
    );

});

afterEach(() => {
    wrapped.unmount();
});

it('has 6 result fields', () => {
    expect(wrapped.find('em').length).toEqual(6);
});