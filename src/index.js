import React, {Component} from "react";
import classNames from "classnames";

import * as styles from "./styles";

export class Konfettikanone extends Component {
  static defaultProps = {
    colors: ["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"],
    speed: ["1", "1.3", "1.7"],
    type: ["Slow", "Medium", "Fast"]
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.confettiWrapper = React.createRef();
  }

  shouldComponentUpdate() {
    // if prop on return true
    return false;
  }

  componentDidMount() {
    this.generateConfetti();
  }

  render() {
    const {children, className, ...props} = this.props;
    const mergedClass = classNames(styles.wrapper, className);

    return (
      <div ref={this.confettiWrapper} className={mergedClass} {...props}>
        {children}
      </div>
    );
  }

  generateConfetti() {
    for (let i = 0; i < 100; i++) {
      const randomValues = this.calcRandomValues();
      const type = `down${randomValues.type}`;

      const inlineStyles = {
        height: randomValues.size,
        width: randomValues.size,
        left: randomValues.left,
        backgroundColor: randomValues.color,
        animation: `${styles[type](
          `${this.confettiWrapper.current.clientHeight + 20}px`
        )} ${randomValues.speed}s linear ${Math.random() * 3}s 1 forwards`
      };

      const particle = document.createElement("div");
      Object.assign(particle.style, inlineStyles);
      particle.className = styles.particle;

      this.confettiWrapper.current.appendChild(particle);
    }
  }

  calcRandomValues() {
    const size = `${Math.floor(Math.random() * 3) + 7}px`;
    const color = this.props.colors[
      Math.floor(Math.random() * this.props.colors.length)
    ];
    const type = this.props.type[
      Math.floor(Math.random() * this.props.type.length)
    ];
    const speed = this.props.speed[
      Math.floor(Math.random() * this.props.speed.length)
    ];
    const left = `${Math.floor(
      Math.random() * this.confettiWrapper.current.clientWidth
    )}px`;

    return {size, left, color, type, speed};
  }
}
