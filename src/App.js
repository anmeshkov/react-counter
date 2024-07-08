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

  changeValue = (btnId) => {
    this.setState((state) => {
      switch (btnId) {
        case "btnMinus":
          return {
            value: this.state.value - 1,
          };
        case "btnPlus":
          return {
            value: this.state.value + 1,
          };
        case "btnReset":
          return {
            value: 0,
          };
        default:
          return {
            value: state.value,
          };
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input value={this.state.value} />
        <BtnGroup changeValue={this.changeValue} />
      </div>
    );
  }
}

export default App;
