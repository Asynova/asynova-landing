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
    // Log error to analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'error', {
        event_category: 'Error Boundary',
        event_label: error.message,
        error_stack: errorInfo.componentStack
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center py-12 px-4">
          <div className="bg-navy/50 border border-teal/20 rounded-lg p-6 text-center max-w-md">
            <div className="text-teal text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
            <p className="text-gray-300 mb-4">
              We're having trouble loading this section
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;