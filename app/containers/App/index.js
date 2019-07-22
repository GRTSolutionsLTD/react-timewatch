/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ReportsPage from 'containers/ReportsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import Header from '../../components/Header/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/reports" component={ReportsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
