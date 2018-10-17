import React from 'react';
import PropTypes from 'prop-types';

import classes from './Agreement.module.scss';
import {SignupText} from '../../organisms/Signup/SignupText';
import EmbeddedLink, {EMBEDDED_LINK_TYPES} from '../EmbeddedLink/EmbeddedLink';

const agreement = (props) => {
  // ASSUMPTION: text should end with link to Privacy Policy
  // (can build this out if link needs to be embedded within text or if we need other links)
  return (
    <div className={classes.Agreement}>
      <input
        type="checkbox"
        checked={props.value}
        onChange={(event) => props.change(event.target.checked)}/>
      <span>
        {SignupText.AGREEMENT_TEXT}
        <EmbeddedLink type={EMBEDDED_LINK_TYPES.PRIVACY_POLICY}/>
      </span>
    </div>
  );
};

agreement.propTypes = {
  value: PropTypes.bool,
  change: PropTypes.func.isRequired
};

export default agreement;