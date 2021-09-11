// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Results from 'components/results/Results';

// Contexts
import { calculatorValues } from 'contexts/calculator-context';

// Helper Functions
import { defaultValues } from 'utils/static';

let wrapped;

beforeEach(() => {

    const data = {
        purchasingPrice: defaultValues.defaultPurchasingPrice,
        deposit: defaultValues.defaultDeposit,
        mortgageTerm: defaultValues.defaultMortgageTerm,
        interestRate: defaultValues.defaultInterestRate,
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