import React from "react";
import { shallow } from "enzyme";
import Cardlistbounce from "./Cardlistbounce";

describe("Cardlistbounce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardlistbounce />);
    expect(wrapper).toMatchSnapshot();
  });
});
