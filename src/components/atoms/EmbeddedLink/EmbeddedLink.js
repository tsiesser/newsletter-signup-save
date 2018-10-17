import React from 'react';
import PropTypes from 'prop-types';

import classes from './EmbeddedLink.module.scss';

export const EMBEDDED_LINK_TYPES = {
  PRIVACY_POLICY: { text: 'Privacy Policy', link: '#' }
};

const embeddedLink = (props) => {
  return (
    <a className={classes.EmbeddedLink}
       href={props.type.link}>
      {props.type.text}
    </a>
  );
};

embeddedLink.propTypes = {
  type: PropTypes.object.isRequired,
};

export default embeddedLink;