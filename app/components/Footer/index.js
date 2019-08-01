import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './index.scss';
function Footer() {
  const socialIconsLocation = 'https://www.usmobile.com/static/img/icns-fill';
  return (
    <footer className="container navbar fixed-bottom  mw-100 text-uppercase justify-content-around">
      <div className="links">
        <a href="register" className="col">
          Register
        </a>
        <a href="reports" className="col">
          Reports
        </a>
        <a href="register" className="col">
          About
        </a>
      </div>
      <div className="links_social justify-content-around">
        <a href="https://www.twiiter.com/usmobile" className="col">
          <img src={`${socialIconsLocation}/icn-twitter.svg`} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/usmobile" className="col">
          <img src={`${socialIconsLocation}/icn-linkedin.svg`} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/usmobile" className="col">
          <img src={`${socialIconsLocation}/icn-instagram.svg`} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/usmobile" className="col">
          <img src={`${socialIconsLocation}/icn-facebook.svg`} alt="twitter" />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
