import React from "react"
import ReactDOM from "react-dom"
import {css} from "emotion"

import {Confetti} from "../src/index.js"

const customStyles = css`
  background: pink;
`

function App() {
  return <Confetti className={customStyles}>Hooray! 🎉</Confetti>
}

const app = document.querySelector("#app")
ReactDOM.render(<App />, app)
