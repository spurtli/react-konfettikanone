import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import { Konfettikanone, Launcher } from "../src/index.js";
import * as styles from "./styles.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      launch: false
    };

    this.onLaunchEnd = this.onLaunchEnd.bind(this);
    this.handleLaunch = this.handleLaunch.bind(this);
  }

  render() {
    const { launch } = this.state;

    return (
      <>
        <h1 className={styles.h1}>🎉 react-konfettikanone 🎉</h1>
        <div className={styles.wrapper}>
          <Konfettikanone
            launch={launch}
            onLaunchEnd={this.onLaunchEnd}
            className={styles.customStyles}
          >
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
              <Launcher onClick={this.handleLaunch} />
            </div>
          </Konfettikanone>
        </div>
      </>
    );
  }

  onLaunchEnd() {
    this.setState({ launch: false });
  }

  handleLaunch() {
    this.setState({ launch: true });
  }
}

const app = document.querySelector("#app");
ReactDOM.render(<App />, app);
