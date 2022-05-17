import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({error:error, errorInfo:errorInfo});
    }
    render(){
        if(this.state.error){
            return(
                <>
                    <h1>Something went wrong</h1>
                    <h3>{this.state.errorInfo.componentStack}</h3>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary