import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import moment from 'moment';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import Clock from '../../components/Clock/Clock';
import { UpdateTodaysRegistrarion } from '../App/actions';
import './index.scss';

export function HomePage({ onClick, loading, reportsList }) {
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    if (loading !== undefined && !loading) {
      reportsList = reportsList.filter(
        record => record.date === moment().format('M/DD/YYYY'),
      );
      setIsRegistered(reportsList.length !== 0);
    }
  });
  return (
    <>
      <Clock />
      <div className="align-items-center">
        <Button
          name="register"
          disabled={isRegistered}
          onClick={event => onClick(event.target.name)}
        >
          Register
        </Button>
        <Button
          name="exit"
          disabled={!isRegistered}
          onClick={event => onClick(event.target.name)}
        >
          Exit
        </Button>
      </div>
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
  onClick: event => {
    dispatch(UpdateTodaysRegistrarion(event));
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
