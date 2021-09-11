// Packages
import React from 'react';
import { mount } from 'enzyme';

// Components
import Header from 'components/header/Header';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Header />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a class name of flex applied', () => {
    expect(wrapped.find('div').hasClass('flex')).toEqual(true);
});

it('has a header title', () => {
    expect(wrapped.find('h1').length).toEqual(1);
});