/**
 *
 * ReportsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectReportsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ReportsPage() {
  useInjectReducer({ key: 'reportsPage', reducer });
  useInjectSaga({ key: 'reportsPage', saga });

  return (
    <div>
      <Helmet>
        <title>ReportsPage</title>
        <meta name="description" content="Description of ReportsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ReportsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reportsPage: makeSelectReportsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ReportsPage);
