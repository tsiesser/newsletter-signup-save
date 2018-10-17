import React from 'react';
import PropTypes from 'prop-types';

import classes from './NameGroup.module.scss';
import {SignupText} from '../../organisms/Signup/SignupText';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

const nameGroup = (props) => {
  let error = null;
  if (props.error) {
    error = (
      <div className={classes.error}>
        <ErrorMessage text={props.error} arrow="up"/>
      </div>
    );
  }

  return (
    <div className={classes.NameGroup}>
      <div className={classes.flexColumn}>
        <div className={classes.flexRow}>
          <Input
            type="text"
            autoFocus={true}
            placeholder={SignupText.FIRSTNAME_PLACEHOLDER}
            value={props.firstName}
            change={(value) => props.change('firstName', value)}
            enter={props.click}/>

          <Input
            type="text"
            placeholder={SignupText.LASTNAME_PLACEHOLDER}
            value={props.lastName}
            change={(value) => props.change('lastName', value)}
            enter={props.click}/>
        </div>

        {error}
      </div>

      <Button
        text={props.button}
        click={props.click}/>
    </div>
  );
};

nameGroup.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  button: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default nameGroup;