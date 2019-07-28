import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import Clock from '../../components/Clock/Clock';
import { UpdateTodaysRegistrarion } from '../App/actions';
import './index.scss';

export function HomePage({ reportsList, onClick, loading }) {
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    if (loading !== undefined && !loading) {
      setIsRegistered(true);
    }
  });

  return (
    <>
      {reportsList}
      <Clock />
      <Button onClick={onClick}>{isRegistered ? 'Exit' : 'Register'}</Button>
    </>
  );
}

HomePage.propTypes = {
  reportsList: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
const mapStateToProps = state => ({
  reportsList: state.global.reportsList,
  loading: state.global.loading,
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

/*
  
if wasnt registerd today -register button is enabled 
if registers -enter new record with date and time


 */
