import React from 'react';

class Myform extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            textarea:'',
            password:'',
            select:'coconut',
            checkbox:''
        }
    }
    handleSubmit = (e) => {
        alert('username='+this.state.username+' password: '+this.state.password)
        e.preventDefault();
    }
    handleChange = (e) => {
        const value = e.target.type==='checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]:value},()=>{
        console.log(this.state);
        })
    }
    
    render(){
        
        return (
        <>
            <form onSubmit={this.handleSubmit}>
                username: <input type='text' onChange={this.handleChange} name='username'></input> <br/>
                password: <input type='text' onChange={this.handleChange} name='password'></input> <br/>
                <textarea onChange={this.handleChange} name='textarea'/> <br/>
                <select value={this.state.value} onChange={this.handleChange} name='select'>
                    <option value='lime'>lime</option>    
                    <option value='coconut'>coconut</option>    
                    <option value='mango'>mango</option>    
                </select> <br/>
                <input type='checkbox' onChange={this.handleChange} name='checkbox'/>
                <input type='submit' value='submit'></input>
            </form>
        </>
        )
    }
}

export default Myform