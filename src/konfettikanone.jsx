import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import * as styles from "./styles";

function random(n = 1) {
  return Math.round(Math.random() * n);
}

const defaultProps = {
  colors: ["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"],
  types: ["Slow", "Medium", "Fast"],
  duration: 10,
  particles: 200,
  launch: false
};

export function Konfettikanone(props) {
  const {
    colors,
    className,
    children,
    duration,
    launch,
    particles,
    types,
    onLaunchEnd
  } = {
    ...defaultProps,
    ...props
  };
  const confettiWrapper = useRef(null);
  const [confetti, setConfetti] = useState(null);
  const mergedClass = classNames(styles.wrapper, className);

  function getRandomParticle() {
    const wrapperHeight = confettiWrapper.current.offsetHeight;
    const wrapperWidth = confettiWrapper.current.offsetWidth;
    const relativeDuration = duration * wrapperHeight;
    const animationTime = relativeDuration * 0.4;
    const delay = Math.random() * (relativeDuration - animationTime);
    const animationDurations = [
      animationTime,
      animationTime * 0.8,
      animationTime * 0.7
    ];
    const randomDuration =
      animationDurations[random(animationDurations.length - 1)];
    const randomColor = colors[random(colors.length - 1)];
    const randomStyle = types[random(types.length - 1)];
    const baseSize = 7;
    const baseSizeVariance = 3;

    return {
      height: `${random(baseSizeVariance) + baseSize}px`,
      width: `${random(baseSizeVariance) + baseSize}px`,
      left: `${random(wrapperWidth)}px`,
      backgroundColor: randomColor,
      animation: `${styles[randomStyle](
        `${wrapperHeight + baseSize + baseSizeVariance}px`
      )} ${randomDuration}ms linear ${delay}ms 1 forwards`
    };
  }

  function createConfetti() {
    return [...Array(particles)].map((_x, index) => {
      const randomStyle = getRandomParticle();

      return (
        <div key={index} style={randomStyle} className={styles.particle} />
      );
    });
  }

  useEffect(() => {
    if (launch) {
      setConfetti(createConfetti());
      const timer = setTimeout(() => {
        onLaunchEnd();
      }, duration * confettiWrapper.current.offsetHeight);
      return () => clearTimeout(timer);
    } else {
      setConfetti(null);
    }
  }, [confettiWrapper, launch]);

  return (
    <div ref={confettiWrapper} className={mergedClass}>
      {confetti}
      {children}
    </div>
  );
}
