/* ----------------------------------------------------------------
  BUTTONS GROUP
---------------------------------------------------------------- */
import { Component } from "react";

class BtnGroup extends Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-primary" id="btnMinus">
          Minus
        </button>
        <button type="button" className="btn btn-outline-primary" id="btnReset">
          Reset
        </button>
        <button
          onClick={() => {
            this.props.increaseValue();
          }}
          type="button"
          className="btn btn-outline-primary"
          id="btnPlus"
        >
          Plus
        </button>
      </div>
    );
  }
}

export default BtnGroup;
