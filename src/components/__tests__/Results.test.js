// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Results from 'components/results/Results';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Results />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has 6 result fields', () => {
    expect(wrapped.find('em').length).toEqual(6);
});