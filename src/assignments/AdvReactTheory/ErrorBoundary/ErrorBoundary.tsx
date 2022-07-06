import React, { Component } from 'react'
import { render } from 'react-dom';

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
    hasError: boolean;

}

 class ErrorBoundary extends Component <ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props)

            this.state = {
                hasError: false

            
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }


    
  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    // return this.state.children
    
}
 }
export default ErrorBoundary

