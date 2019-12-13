import React, {PureComponent} from "react";

export class Launcher extends PureComponent {
  render() {
    const {onClick} = this.props;

    return (
      <button type="button" onClick={onClick}>
        Confetti
      </button>
    );
  }
}
