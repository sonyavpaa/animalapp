import React, { Component } from "react";
import Cards from "./Cards";
import { animals } from "./animals";
import classes from "./App.module.css";

class App extends Component {
  state = {
    animals: animals,
  };

  removeHandler = (name) => {
    const updatedArr = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArr,
    });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      {
        const updatedArr = state.animals.map((animal) => {
          if (animal.name === name) {
            return { ...animal, likes: animal.likes + 1 };
          } else {
            return animal;
          }
        });

        return {
          animals: updatedArr,
        };
      }
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.h1}>Animals app</h1>
        <div className={classes.cardsContainer}>
          {this.state.animals.map((animal) => {
            return (
              <Cards
                key={animal.name}
                name={animal.name}
                // remove={this.removeHandler.bind(this, animal.name)}
                remove={() => this.removeHandler(animal.name)}
                add={() => {
                  this.addLikeHandler(animal.name);
                }}
                like={animal.likes}
              ></Cards>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

// {
//   `url(https://source.unsplash.com/1600x900/?${animal.name})`;
// }
// `https://source.unsplash.com/1600x900/?${animal.name}`;
