import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componetDidCtach(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    return this.state.hasError ? <h1>Oooops. that is not good</h1> : this.props.children
  }
}