import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store/';

export default function RouterWapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { singed } = store.getState().auth;
  if (!singed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (singed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
RouterWapper.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};
RouterWapper.defaultProps = {
  isPrivate: false,
};
