// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Calculator from 'components/calculator/Calculator';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Calculator />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has 4 sliders', () => {
    expect(wrapped.find('Slider').length).toEqual(4);
});