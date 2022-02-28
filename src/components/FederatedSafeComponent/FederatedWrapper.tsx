import React from 'react';

interface FederatedWrapperState {
    hasError: boolean;
}

interface FederatedWrapperProps {
    error: string | any;
    delayed: string | JSX.Element | React.ReactNode;
    fallbackKey: string;
    children: any;
}

class FederatedWrapper extends React.Component<FederatedWrapperProps, FederatedWrapperState> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
   // logErrorToMyService(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return this.props.error || <h1>Something went wrong.</h1>;
      }
      return (
        <React.Suspense fallback={this.props.delayed || <div style={{width: 100, height: 50, color: 'darkblue'}}>Loading {this.props.fallbackKey}</div>}>
          {this.props.children}
        </React.Suspense>
      );
    }
}

export default FederatedWrapper;