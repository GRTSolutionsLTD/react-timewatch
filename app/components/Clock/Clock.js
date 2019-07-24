import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Clock from 'react-clock';
import messages from './messages';

import './Clock.scss';

export default class Sample extends Component {
  state = {
    value: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      const now = new Date();
      this.onChange(now);
    }, 1000);
  }

  onChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <FormattedMessage {...messages.header} />
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Clock size={200} value={value} />
          </main>
        </div>
      </div>
    );
  }
}
