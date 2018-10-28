import React, {Component, createRef} from "react";
import classNames from "classnames";

import * as styles from "./styles";

export class Konfettikanone extends Component {
  static defaultProps = {
    colors: ["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"],
    speed: ["1", "1.3", "1.7"],
    types: ["Slow", "Medium", "Fast"],
    duration: 5000
  };

  constructor(props) {
    super(props);
    this.confettiWrapper = createRef();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.launch) {
      this.generateConfetti();
      setTimeout(nextProps.onLaunchEnd(), nextProps.duration);
    }
    return false;
  }

  render() {
    const {children, className, launch, onLaunchEnd, ...props} = this.props;
    const mergedClass = classNames(styles.wrapper, className);

    return (
      <div ref={this.confettiWrapper} className={mergedClass} {...props}>
        {children}
      </div>
    );
  }

  generateConfetti() {
    for (let i = 0; i < 200; i++) {
      const [
        size,
        left,
        backgroundColor,
        typeValue,
        speed
      ] = this.calcRandomValues();
      const {current: target} = this.confettiWrapper;
      const type = `down${typeValue}`;

      const inlineStyles = {
        height: size,
        width: size,
        left,
        backgroundColor,
        animation: `${styles[type](
          `${target.clientHeight + 20}px`
        )} ${speed}s linear ${Math.random() * 3}s 1 forwards`
      };

      const particle = document.createElement("div");
      Object.assign(particle.style, inlineStyles);
      particle.className = styles.particle;

      target.appendChild(particle);
    }
  }

  calcRandomValues() {
    const {colors, types, speed: speeds} = this.props;
    const {current: target} = this.confettiWrapper;

    const size = `${Konfettikanone.random(3) + 7}px`;
    const color = Konfettikanone.pickRandomElement(colors);
    const type = Konfettikanone.pickRandomElement(types);
    const speed = Konfettikanone.pickRandomElement(speeds);
    const left = `${Konfettikanone.random(target.clientWidth)}px`;

    return [size, left, color, type, speed];
  }

  static pickRandomElement(a) {
    if (a.length === 0) {
      return null;
    }

    return a[Konfettikanone.random(a.length - 1)];
  }

  static random(n = 1) {
    return Math.round(Math.random() * n);
  }
}
