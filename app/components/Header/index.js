/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../Clock/Clock.scss';

function Header() {
  const activeStyle = { color: '#F15B2A' };

  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/register" activeStyle={activeStyle} exact>
            Register
          </NavLink>
        </NavItem>
        {' | '}
        <NavItem>
          <NavLink to="/reports" activeStyle={activeStyle}>
            Reports
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}

Header.propTypes = {};

export default memo(Header);
