import React from "react";
import { mount } from "enzyme";
import { Konfettikanone } from "../index";

describe("<Konfettikanone />", () => {
  it("renders a konfettikanone component", () => {
    const konfettikanone = mount(<Konfettikanone />);

    expect(konfettikanone.exists()).toBe(true);
  });

  describe("Konfettikanone.pickRandomElement(…)", () => {
    it.skip("should pick a random value from Array", () => {
      const a = [1, 2, 3, 4, 5];
      const p = Konfettikanone.pickRandomElement(a);

      expect(a).toContain(p);
    });

    it.skip("should return null for empty Array", () => {
      const a = [];
      const p = Konfettikanone.pickRandomElement(a);

      expect(p).toBe(null);
    });

    it.skip("should always return the first/same element for Array of length=1", () => {
      const a = [1];
      const p1 = Konfettikanone.pickRandomElement(a);
      const p2 = Konfettikanone.pickRandomElement(a);

      expect(p1).toBe(a[0]);
      expect(p2).toBe(a[0]);
    });
  });

  describe("Konfettikanone.random(…)", () => {
    it.skip("should return a random value", () => {
      const n = 5;
      const v = Konfettikanone.random(n);
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(n);
    });

    it.skip("should return 0 for n=0", () => {
      const n = 0;
      const v = Konfettikanone.random(n);
      expect(v).toBe(0);
    });
  });
});
