import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import 'tachyons';

import data from './components/heros.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [...data.superheroes],
      score: 0,
      topScore: 0
    }
  }
  componentDidUpdate() {
    if (!this.state.score) {
      this.state.heros.forEach(e => e.clicked = false)
    }
  }

  handleClick = (id) => {
    console.log(id);
    const newHeros = [...this.state.heros];

    newHeros.forEach((element) => {
      if (element.id === Number(id)) {
        if (element.clicked) {
          if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
          this.setState({ score: 0 });
        } else {
          this.setState({ score: this.state.score + 1 });
          element.clicked = true;
        }
      }
    })
    newHeros.sort(() => Math.random() - 0.5);
    this.setState({ heros: newHeros });
  }

  render() {
    return (
      <>
        <h1 className='f1'>Superheroes Memory Game</h1><span>score: {this.state.score}</span><span>top score: {this.state.topScore}</span>

        <h3 className='f3'>Get points by clicking on an image but don't click on any more than once!</h3>
        <div className='tc'>

          <div id='board'>
            <div>
              {
                this.state.heros.map((user, i) => {
                  return (
                    <Card
                      handleClick={() => this.handleClick(this.state.heros[i].id)}
                      key={i}
                      clicked={this.state.heros[i].clicked}
                      id={this.state.heros[i].id}
                      name={this.state.heros[i].name}
                      occupation={this.state.heros[i].occupation}
                      image={this.state.heros[i].image}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;