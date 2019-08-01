import React, { memo } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './Header.scss';
function Header() {
  return (
    <Container>
      <Navbar className="nav nav-tabs">
        <div className="nav-item">
          <NavbarBrand className="nav-link active" href="/">
            <FormattedMessage {...messages.header} />
          </NavbarBrand>
        </div>
        <Nav>
          <NavItem className="nav-item">
            <NavLink className="nav-link" href="/register">
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" href="/reports">
              Reports
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default memo(Header);
