import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
	}
	}
	add (i) {
		const lanArr = [...this.state.languages];
    	lanArr[i].votes++;
    	this.setState({languages: lanArr});
	}

	render(){
		return(
			<>
				<h1>Vote Your Language!</h1>
				<div className="container">
					{
						this.state.languages.map((item, index) => 
							<div key={index} className="language">
								<div className="count">
									{item.votes}
								</div>
								<div className="name">
									{item.name}
								</div>
								<button onClick={this.add.bind(this, index)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}

export default App;