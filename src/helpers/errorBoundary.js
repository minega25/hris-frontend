import React, { Component } from 'react';
import { Redirect, Link } from '@reach/router';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: true };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught this error-->: ', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          An error occured Click <Link to="/">here</Link> to go the homepage or
          wait for five seconds to redirect to home page.
        </h1>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
