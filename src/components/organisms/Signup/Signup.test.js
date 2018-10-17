import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Signup from './Signup';

configure({ adapter: new Adapter() });

describe('<Signup/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup/>);
  });

  it('should start with at email step', () => {
    expect(wrapper.state().step).toBe('email');
  });

  it('should start with agreement checked', () => {
    expect(wrapper.state().agreement).toBe(true);
  });

  it('should move to name step when button clicked w/valid email & agreement checked', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

  it('should NOT move to name step when button clicked w/MISSING email', () => {
    const instance = wrapper.instance();
    instance.clickHandler();
    expect(wrapper.state().step).toBe('email');
  });

  it('should NOT move to name step when button clicked w/email field all spaces', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', ' ');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('email');
  });

  it('should NOT move to name step when button clicked w/INVALID email', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('email');
  });

  it('should NOT move to name step when button clicked w/agreement UNCHECKED', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('agreement', false);
    instance.clickHandler();
    expect(wrapper.state().step).toBe('email');
  });

  it('should move to congrats step when button clicked w/valid first and last names', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.fieldChangeHandler('firstName', 'test');
    instance.fieldChangeHandler('lastName', 'test');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('congrats');
  });

  it('should NOT move to congrats step when button clicked w/first and last name missing', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

  it('should NOT move to congrats step when button clicked w/last name missing', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.fieldChangeHandler('firstName', 'test');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

  it('should NOT move to congrats step when button clicked w/last name all spaces', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.fieldChangeHandler('firstName', 'test');
    instance.fieldChangeHandler('lastName', ' ');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

  it('should NOT move to congrats step when button clicked w/first name missing', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.fieldChangeHandler('lastName', 'test');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

  it('should NOT move to congrats step when button clicked w/first name all spaces', () => {
    const instance = wrapper.instance();
    instance.fieldChangeHandler('email', 'test@test.com');
    instance.clickHandler();
    instance.fieldChangeHandler('firstName', ' ');
    instance.fieldChangeHandler('lastName', 'test');
    instance.clickHandler();
    expect(wrapper.state().step).toBe('name');
  });

});