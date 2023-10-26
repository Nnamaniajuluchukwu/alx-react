import React, { Component } from 'react';


// Defined the WithLogging HOC
const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      // Log when the component is mounted
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      // Log when the component is about to unmount
      const componentName = WrappedComponent.displayName || 'Component';
      console.log(`Component ${componentName} is going to unmount on componentWillUnmount()`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Set the displayName of the HOC for debugging
const getDisplayName = (WrappedComponent) => {
  return `WithLogging(${WrappedComponent.displayName || 'Component'})`;
};


export default function Logged(WrappedComponent) {
  const HOC = WithLogging(WrappedComponent);
  HOC.displayName = getDisplayName(WrappedComponent);
  return HOC;
};
