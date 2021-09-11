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

// beforeEach will execute before running
// every test in this suite.
beforeEach(() => {

    // Static data is being provided to the components
    // because the component Calculator needs some props
    // from context when it mounts. Therefore, to cover this
    // corner case, static data can be provided to simulate
    // actual component mounting.
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

// afterEach will execute after running
// every test in this suite. This will unmount
// the component every time it is loaded for testing.
// This will help in component clear up & improving
// the speed of performing tests.
afterEach(() => {
    wrapped.unmount();
});

it('has 4 sliders', () => {
    expect(wrapped.find('Slider').length).toEqual(4);
});