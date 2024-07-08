/* ----------------------------------------------------------------
  APP
---------------------------------------------------------------- */
import { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import BtnGroup from "./components/ButtonsGroup";

class App extends Component {
  state = {
    value: 0,
  };

  increaseValue = () => {
    console.log("increaseValue");
    this.setState((state) => {
      return {
        value: this.state.value + 1,
      };
    });
  };

  decreaseValue = () => {};

  resetValue = () => {};

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <BtnGroup increaseValue={this.increaseValue} />
      </div>
    );
  }
}

export default App;
