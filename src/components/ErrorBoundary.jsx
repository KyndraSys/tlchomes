import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto py-16 text-center bg-white">
          <h1 className="text-4xl font-bold text-green">Something Seems Off</h1>
          <p className="mt-4 text-lg">We apologize for the inconvenience. Please try refreshing or contact Admin <a href="mailto:support@tlchomes.co.ke" className="text-brown underline">support@tlchomes.co.ke</a>.</p>
          <a href="/" className="mt-6 inline-block bg-green text-white px-6 py-3 rounded-lg hover:bg-brown transition">Return to Home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;