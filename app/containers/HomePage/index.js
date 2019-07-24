import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { createStructuredSelector } from 'reselect';
import Clock from '../../components/Clock/Clock';
import { makeSelectGetTodaysReports } from '../App/selectors';
import { UpdateTodaysRegistrarion } from '../App/actions';
import './index.scss';

export function HomePage({ reportsList, onClick }) {
  const [isRegistered, setIsRegistered] = useState();
  useEffect(() => {
    setIsRegistered(reportsList.length !== 0);
  });
  return (
    <>
      <Clock />
      <Button onClick={onClick}>{isRegistered ? 'Exit' : 'Register'}</Button>
    </>
  );
}

HomePage.propTypes = {
  reportsList: PropTypes.array,
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reportsList: makeSelectGetTodaysReports(),
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(UpdateTodaysRegistrarion());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
