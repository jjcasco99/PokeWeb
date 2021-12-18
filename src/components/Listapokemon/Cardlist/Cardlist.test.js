import React from "react";
import { shallow } from "enzyme";
import Cardlist from "./Cardlist";

describe("Cardlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
