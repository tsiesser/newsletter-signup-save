import React from 'react';
import PropTypes from 'prop-types';

import classes from './SignupForm.module.scss';
import {SignupText} from '../../organisms/Signup/SignupText';
import Title from '../../atoms/Title/Title';
import EmailGroup from '../EmailGroup/EmailGroup';
import NameGroup from '../NameGroup/NameGroup';
import Agreement from '../../atoms/Agreement/Agreement';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

const signUpForm = (props) => {
  const title = (props.step === 'email' ? SignupText.EMAIL_TITLE : SignupText.NAME_TITLE);
  const button = (props.step === 'email' ? SignupText.EMAIL_BUTTON : SignupText.NAME_BUTTON);

  let agreement = null;
  if (props.step === 'email') {
    agreement = (
      <div className={classes.agreement}>
        <Agreement
          value={props.agreement}
          change={(value) => props.fieldChange('agreement', value)}/>
      </div>
    );
  }

  let error = null;
  if (props.error && props.error.field === 'agreement') {
    error = <ErrorMessage text={props.error.message} arrow="down"/>
  }

  return (
    <div className={classes.SignupForm}>
      <Title text={title}/>

      { props.step === 'email' ?
        <EmailGroup
          email={props.email}
          error={props.error && props.error.field === 'email' ? props.error.message : null}
          change={(value) => props.fieldChange('email', value)}
          button={button}
          click={props.click}/> :

        <NameGroup
          firstName={props.firstName}
          lastName={props.lastName}
          error={props.error && (props.error.field === 'firstName' || props.error.field === 'lastName') ? props.error.message : null}
          change={(field, value) => props.fieldChange(field, value)}
          button={button}
          click={props.click}/> }

      {error}
      {agreement}
    </div>
  );
};

signUpForm.propTypes = {
  step: PropTypes.oneOf([ 'email', 'name' ]),
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  agreement: PropTypes.bool,
  error: PropTypes.object,
  fieldChange: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired
};

export default signUpForm;