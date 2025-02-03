class ErrorBoundary extends React.Component {
    state = { hasError: false };
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div className="flex items-center justify-center h-screen text-white">
            <div className="text-center">
              <h2>Something went wrong.</h2>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-teal text-navy rounded-lg"
              >
                Refresh Page
              </button>
            </div>
          </div>
        );
      }
      return this.props.children;
    }
  }