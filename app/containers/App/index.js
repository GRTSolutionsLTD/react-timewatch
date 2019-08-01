/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from 'containers/HomePage/Loadable';
import ReportsPage from 'containers/ReportsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from '../../components/Footer/index';

import Header from '../../components/Header/Loadable';
import GlobalStyle from '../../global-styles';
import { getReports } from './actions';
export function App({ onLoad }) {
  useEffect(() => {
    onLoad();
  });
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/reports" component={ReportsPage} />
        <Route path="/register" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </>
  );
}
App.propTypes = {
  onLoad: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(getReports());
  },
});
export default connect(
  null,
  mapDispatchToProps,
)(App);
