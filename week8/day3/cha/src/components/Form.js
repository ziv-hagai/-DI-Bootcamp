import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    }
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value }, () => {
      console.log(this.state);

    })
  }

  render() {
    return (
      <>
        <h1>Sample form</h1>
        <form className="inputForm">
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br />
          <input type="text" name="age" placeholder="Age" onChange={this.handleChange} /><br /><br />
          <label><input type="radio" name="gender" onChange={this.handleChange} value='male' />Male</label>
          <label><br /><input type="radio" name="gender" onChange={this.handleChange} value='female' />Female</label><br />
          <label >Select your destination</label><br />
          <select name="destination" onChange={this.handleChange}>
            <option value="" >Please Choose a destination</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select><br /><br />
          <label >Dietary restrictions:</label><br />
          <div >
            <input type="checkbox" name="nutsFree" onChange={this.handleChange} /><span>Nuts free</span><br />
            <input type="checkbox" name="lactoseFree" onChange={this.handleChange} /><span>Lactose free</span><br />
            <input type="checkbox" name="isVegan" onChange={this.handleChange} /><span>Vegan</span>
          </div>
          <button type="submit" >Submit</button>
        </form>
        <div className="entered-info">
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions: </p>
          <div className="restrictions"><span>**Nuts free : {this.state.nutsFree ? " Yes" : "No"}</span> <br />
            <span>**Lactose free : {this.state.lactoseFree ? " Yes" : "No"}</span> <br /><span>**Vegan meal : {this.state.isVegan ? " Yes" : "No"}</span>
          </div>
        </div>
      </>
    )
  }
}

export default Form

