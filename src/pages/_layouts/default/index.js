import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function DefaultAuth({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
DefaultAuth.prototype = {
  children: PropTypes.element.isRequired,
};

