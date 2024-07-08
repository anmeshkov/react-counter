/* ----------------------------------------------------------------
  INPUT
---------------------------------------------------------------- */
import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        type="number"
        className="form-control mb-3"
        id="input"
        disabled
        defaultValue={0}
      />
    );
  }
}

export default Input;
