import { css, keyframes } from "emotion";

export const wrapper = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const particle = css`
  position: absolute;
  top: -10px;
  will-change: transform;
`;

export const Slow = (height: string) => {
  return keyframes`
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  100% { transform: translate3d(-25px, ${height}, 0) rotateX(360deg) rotateY(180deg); }
`;
};

export const Medium = (height: string) => {
  return keyframes`
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  100% { transform: translate3d(100px, ${height}, 0) rotateX(100deg) rotateY(360deg); }
`;
};

export const Fast = (height: string) => {
  keyframes`
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  100% { transform: translate3d(-50px, ${height}, 0) rotateX(10deg) rotateY(250deg); }
`;
};
