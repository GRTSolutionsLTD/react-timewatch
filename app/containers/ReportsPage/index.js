import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DatePicker from 'react-datepicker';

import { filter } from 'lodash';
import moment from 'moment';

import { DATE_FORMAT } from '../App/constants';
import { makeSelectGetList } from '../App/selectors';
import messages from './messages';
import './report-page.scss';

export function ReportsPage({ reportList }) {
  const [listItem, setListItem] = useState(reportList);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const onFilterList = () => {
    const list = filter(reportList, report =>
      moment(report.date, DATE_FORMAT).isBetween(
        moment(fromDate),
        moment(toDate),
      ),
    );
    setListItem(list);
  };

  const listItems = listItem.map(report => (
    <tr key={report.id}>
      <td>{report.enter}</td>
      <td>{report.leave}</td>
      <td>{report.date}</td>
    </tr>
  ));

  return (
    <div>
      <Helmet>
        <title>ReportsPage</title>
        <meta name="description" content="Description of ReportsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <table>
        <tr>
          <th>enter hour</th>
          <th>leave hour</th>
          <th>date</th>
        </tr>
        {listItems}
      </table>
      <div className="filterBlock">
        <h4>-filter by date-</h4>
        <p>from date : </p>
        <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
        <p>to date : </p>
        <DatePicker selected={toDate} onChange={date => setToDate(date)} />
        <br />
        <input type="button" value="filter" onClick={onFilterList} />
      </div>
    </div>
  );
}

ReportsPage.propTypes = {
  reportList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  reportList: makeSelectGetList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ReportsPage);
