import React from "react"
import ReactDOM from "react-dom"
import {Confetti} from "../src/index.js"

function App() {
  return <Confetti>Hooray!</Confetti>
}

const app = document.querySelector("#app")
ReactDOM.render(<App />, app)
