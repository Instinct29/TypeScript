import React, { Component, ErrorInfo, ReactNode } from 'react'
import { render } from 'react-dom';

interface Props {
    children?: ReactNode;
  }
  
  interface State {
    hasError: boolean;
  }


 class ErrorBoundary extends Component <Props, State> {

    constructor(props: Props) {
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
   
     
  public render() {
    if (this.state.hasError) {
        return <h1>Something went wrong!- <span><h2>Check code for the understanding of this concept</h2></span></h1>
    }
     return this.props.children
    
}
 }
export default ErrorBoundary


