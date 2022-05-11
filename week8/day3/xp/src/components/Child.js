import React from 'react';

class Child extends React.Component {
    componentWillUnmount() {
        // if (!this.state.show) {
          alert('unmounting')
        // }
      } 
    render() {
        return (
        <>
                <h3>Hello World!</h3>

        </>
        )
    }
}

export default Child

