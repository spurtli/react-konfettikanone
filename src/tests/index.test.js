import React from "react";
import {mount} from "enzyme";
import {Konfettikanone} from "../index";

describe("<Confetti />", () => {
  it("renders a confetti component", () => {
    const confetti = mount(<Konfettikanone />);

    expect(confetti.exists()).toBe(true);
  });
});
