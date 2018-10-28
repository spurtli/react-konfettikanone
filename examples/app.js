import React from "react";
import ReactDOM from "react-dom";

import {Konfettikanone} from "../src/index.js";
import * as styles from "./styles.js";

function App() {
  return (
    <>
      <h1 className={styles.h1}>🎉 react-konfettikanone 🎉</h1>
      <div className={styles.wrapper}>
        <Konfettikanone className={styles.customStyles}>
          <div className={styles.card}>
            <h2>🎊 Hooray, hooray! 🎊</h2>
            <p>
              Floating everywhere
              <br />
              Show me how to find
              <br />
              Confetti, confetti, confetti
              <br />
              Cover us this time
              <br />
            </p>
            <p>Let's celebrate and throw some confetti!</p>
          </div>
        </Konfettikanone>
      </div>
    </>
  );
}

const app = document.querySelector("#app");
ReactDOM.render(<App />, app);
