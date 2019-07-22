/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import messages from './messages';
import './index.scss';

export default function HomePage() {
  const activeStyle = { color: '#F15B2A' };
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
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
