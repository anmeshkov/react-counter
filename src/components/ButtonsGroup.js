/* ----------------------------------------------------------------
  BUTTONS GROUP
---------------------------------------------------------------- */
import { Component } from "react";

class BtnGroup extends Component {
  render() {
    return (
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" id="btnMinus">
          Minus
        </button>
        <button type="button" class="btn btn-outline-primary" id="btnReset">
          Reset
        </button>
        <button type="button" class="btn btn-outline-primary" id="btnPlus">
          Plus
        </button>
      </div>
    );
  }
}

export default BtnGroup;