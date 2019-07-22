/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  const activeStyle = { color: '#F15B2A' };

  return (
    <>
      <div>
        <FormattedMessage {...messages.header} />
      </div>
      <nav>
        <NavLink to="/register" activeStyle={activeStyle} exact>
          Register
        </NavLink>
        {' | '}
        <NavLink to="/reports" activeStyle={activeStyle}>
          Reports
        </NavLink>
      </nav>
    </>
  );
}

Header.propTypes = {};

export default memo(Header);
