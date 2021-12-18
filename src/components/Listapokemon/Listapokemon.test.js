import React from "react";
import { shallow } from "enzyme";
import Listapokemon from "./Listapokemon";

describe("Listapokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Listapokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
