/* ----------------------------------------------------------------
  INPUT
---------------------------------------------------------------- */
import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        type="number"
        class="form-control mb-3"
        id="input"
        disabled
        value="0"
      />
    );
  }
}

export default Input;
