import {css} from "emotion";

export const customStyles = css`
  background: pink;
`;

export const wrapper = css`
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

export const card = css`
  background: white;
  padding: 3rem 4rem 3.5rem;
  font-size: 2rem;
  text-align: center;

  h2 {
    color: #50248f;
    font-size: 3.3rem;
    font-weight: 700;
  }

  p {
    font-weight: 600;
    color: #9c6ade;
  }

  p:first-of-type {
    color: #212b36;
    font-weight: 700;
    font-family: "Mali";
    font-size: 2.5rem;
  }
`;

export const h1 = css`
  text-align: center;
  font-size: 4rem;
  font-family: "Mali";
`;
