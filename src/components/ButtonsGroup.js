/* ----------------------------------------------------------------
  BUTTONS GROUP
---------------------------------------------------------------- */
import { Component } from "react";

class BtnGroup extends Component {
  onButtonClick = (event) => {
    this.props.changeValue(event.target.id);
  };

  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={this.onButtonClick}
          type="button"
          className="btn btn-outline-primary"
          id="btnMinus"
        >
          Minus
        </button>
        <button
          onClick={this.onButtonClick}
          type="button"
          className="btn btn-outline-primary"
          id="btnReset"
        >
          Reset
        </button>
        <button
          onClick={this.onButtonClick}
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
