// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Header from 'components/header/Header';

let wrapped;

// beforeEach will execute before running
// every test in this suite.
beforeEach(() => {
    wrapped = mount(<Header />);
});

// afterEach will execute after running
// every test in this suite. This will unmount
// the component every time it is loaded for testing.
// This will help in component clear up & improving
// the speed of performing tests.
afterEach(() => {
    wrapped.unmount();
});

it('has a class name of flex applied', () => {
    expect(wrapped.find('div').hasClass('flex')).toEqual(true);
});

it('has a header title', () => {
    expect(wrapped.find('h1').length).toEqual(1);
});