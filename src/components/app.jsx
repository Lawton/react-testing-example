import React, { Component } from 'react';
import Layout from '../layout';
import Calculator from './calculator';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Calculator />
      </Layout>
    );
  }
}
