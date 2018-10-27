import React from "react"
import {shallow} from "enzyme"
import {Confetti} from "../index"

describe("<Confetti />", () => {
  it("renders a confetti component", () => {
    const confetti = shallow(<Confetti />)

    expect(confetti.exists()).toBe(true)
  })
})
