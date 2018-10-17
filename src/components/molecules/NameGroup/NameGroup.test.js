import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NameGroup from './NameGroup';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

configure({ adapter: new Adapter() });

describe('<NameGroup/>', () => {
  let wrapper;
  let func;
  beforeEach(() => {
    func = () => {};
    wrapper = shallow(<NameGroup button="BUTTON" change={func} click={func}/>);
  });

  it('should render <ErrorMessage/> if props.error provided', () => {
    wrapper.setProps({ error: 'error' });
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  });

  it('should NOT render <ErrorMessage/> if props.error NOT provided', () => {
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

});