import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({error:error});
    }
    render(){
        if(this.state.error){
            return(
                <>
                    <p>5 is too many!</p>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary