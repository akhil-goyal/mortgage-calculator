// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Calculator from 'components/calculator/Calculator';

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