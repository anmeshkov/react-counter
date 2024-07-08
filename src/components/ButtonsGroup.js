/* ----------------------------------------------------------------
  BUTTONS GROUP
---------------------------------------------------------------- */
import { Component } from "react";

class BtnGroup extends Component {
  onButtonClick = (event) => {
    this.props.changeValue(event.target.id);
  };

  render() {
    const buttons = [
      { id: "btnMinus", name: "Minus" },
      { id: "btnReset", name: "Reset" },
      { id: "btnPlus", name: "Plus" },
    ];

    const renderButtons = buttons.map((btn) => {
      return (
        <button
          onClick={this.onButtonClick}
          type="button"
          className="btn btn-outline-primary"
          id={btn.id}
          key={btn.id}
        >
          {btn.name}
        </button>
      );
    });
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {renderButtons}
      </div>
    );
  }
}

export default BtnGroup;
