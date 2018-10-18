import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignupForm from './SignupForm';
import EmailGroup from '../EmailGroup/EmailGroup';
import NameGroup from '../NameGroup/NameGroup';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';


configure({ adapter: new Adapter() });

describe('<SignupForm/>', () => {
  let wrapper;
  let func;
  beforeEach(() => {
    func = () => {};
    wrapper = shallow(<SignupForm fieldChange={func} click={func}/>);
  });

  it('should have <EmailGroup/> if step=email', () => {
    wrapper.setProps({ step: 'email' });
    expect(wrapper.find(EmailGroup)).toHaveLength(1);
  });

  it('should have <NameGroup/> if step=name', () => {
    wrapper.setProps({ step: 'name' });
    expect(wrapper.find(NameGroup)).toHaveLength(1);
  });

  it('should NOT have <NameGroup/> if step=email', () => {
    wrapper.setProps({ step: 'email' });
    expect(wrapper.find(NameGroup)).toHaveLength(0);
  });

  it('should NOT have <EmailGroup/> if step=name', () => {
    wrapper.setProps({ step: 'name' });
    expect(wrapper.find(EmailGroup)).toHaveLength(0);
  });

  it('should have <ErrorMessage/> if error and error.field=agreement', () => {
    wrapper.setProps({ step: 'email', error: { message: 'ERROR', field: 'agreement' }});
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  });

  it('should NOT have <ErrorMessage/> if error and error.field=email', () => {
    wrapper.setProps({ step: 'email', error: { message: 'ERROR', field: 'email' }});
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

});