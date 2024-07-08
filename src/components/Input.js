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
        // defaultValue={0}
        value={this.props.value}
      />
    );
  }
}

export default Input;
