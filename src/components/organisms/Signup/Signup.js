import React, {Component} from 'react';

import classes from './Signup.module.scss';
import {SignupText} from './SignupText';
import Header from '../../atoms/Header/Header';
import SignupForm from '../../molecules/SignupForm/SignupForm';
import Congrats from '../../molecules/Congrats/Congrats';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    agreement: true,
    step: 'email', // steps: email => name => congrats,
    error: null // object w/field & message properties
  };

  fieldChangeHandler = (field, value) => {
    this.setState({
      [field]: value,
      error: null
    });
  }

  validateEmail() {
    // regex from https://emailregex.com/
    //   original: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    //   removed unnecessary backslashes from [ chars to clear up console warnings
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return (this.state.email &&
      this.state.email.trim() &&
      regex.test(this.state.email.trim()));
  }

  validateName(field) {
    return (this.state[field] && this.state[field].trim());
  }

  submit() {
    const result = {
      email: this.state.email.trim(),
      firstName: this.state.firstName.trim(),
      lastName: this.state.lastName.trim()
    };
    console.log('SUBMIT SIGNUP:', result);
  }

  clickHandler = () => {
    let nextStep = this.state.step;
    let error;
    if (this.state.step === 'email') {
      if (!this.validateEmail()) {
        error = { field: 'email', message: SignupText.EMAIL_ERROR };
      } else if (!this.state.agreement) {
        error = { field: 'agreement', message: SignupText.AGREEMENT_ERROR };
      } else {
        nextStep = 'name';
      }
    } else if (this.state.step === 'name') {
      if (!this.validateName('firstName') || !this.validateName('lastName')) {
        error = { field: 'firstName', message: SignupText.NAME_ERROR };
      } else {
        nextStep = 'congrats';
        this.submit();
      }
    }
    this.setState({
      step: nextStep,
      error: error
    });
  };

  render() {
    const header = (this.state.step === 'congrats' ? SignupText.CONGRATS_HEADER : SignupText.JOIN_HEADER);

    let classArray = [ classes.Signup ];
    let bodyArray = [ classes.body ];
    let body;
    if (this.state.step === 'congrats') {
      body = <Congrats/>;
      classArray.push(classes.congrats);
      bodyArray.push(classes['congrats-body']);
    } else {
      body = (
        <SignupForm
          step={this.state.step}
          email={this.state.email}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          agreement={this.state.agreement}
          error={this.state.error}
          fieldChange={(field, value) => this.fieldChangeHandler(field, value)}
          click={this.clickHandler}/>
      );
    }

    return (
      <div className={classes.SignupContainer}>
        <div className={classArray.join(' ')}>
          <Header text={header}/>
          <div className={classes.spacer}/>
          <div className={bodyArray.join(' ')}>{body}</div>
        </div>
      </div>
    );
  }
}

export default Signup;