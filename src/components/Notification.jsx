import React from 'react';
import css from './Reviews.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
