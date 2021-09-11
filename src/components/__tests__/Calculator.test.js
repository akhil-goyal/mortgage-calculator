// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Calculator from 'components/calculator/Calculator';

//  Contexts
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
            <Calculator />
        </calculatorValues.Provider>
    );

});

afterEach(() => {
    wrapped.unmount();
});

it('has 4 sliders', () => {
    expect(wrapped.find('Slider').length).toEqual(4);
});