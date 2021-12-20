import React from "react";
import { shallow } from "enzyme";
import Listapokemonbounce from "./Listapokemonbounce";

describe("Listapokemonbounce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Listapokemonbounce />);
    expect(wrapper).toMatchSnapshot();
  });
});
