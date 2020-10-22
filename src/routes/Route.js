import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouterWapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const singed = false;
  if (!singed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (singed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = singed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouterWapper.propTypes = {
  isPrivate: propTypes.bool,
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};
RouterWapper.defaultProps = {
  isPrivate: false,
};
