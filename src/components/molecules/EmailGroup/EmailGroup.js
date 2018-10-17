import React from 'react';
import PropTypes from 'prop-types';

import classes from './EmailGroup.module.scss';
import {SignupText} from '../../organisms/Signup/SignupText';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

const emailGroup = (props) => {
  let error = null;
  if (props.error) {
    error = (
      <div className={classes.error}>
        <ErrorMessage text={props.error} arrow="up"/>
      </div>
    );
  }

  return (
    <div className={classes.EmailGroup}>
      <div className={classes.flexColumn}>
        <Input
          type="email"
          autoFocus={true}
          placeholder={SignupText.EMAIL_PLACEHOLDER}
          value={props.email}
          change={(value) => props.change(value)}
          enter={props.click}/>

        {error}
      </div>

      <Button
        text={props.button}
        click={props.click}/>
    </div>
  );
};

emailGroup.propTypes = {
  email: PropTypes.string,
  button: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default emailGroup;