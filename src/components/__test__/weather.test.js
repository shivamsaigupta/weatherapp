import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Weather from "../weather.component";

import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Weather />, div);
});

it("renders weather details correctly", () => {
  const weather = shallow(
    <Weather location="Mumbai" temp="234" precip="Sunny"></Weather>
  );
  expect(weather).toMatchSnapshot();
});

it("renders weather details correctly 2", () => {
  const weather = shallow(
    <Weather location="Delhi" temp="164" precip="Rain"></Weather>
  );
  expect(weather).toMatchSnapshot();
});

it("matches snapshot", () => {
  const weather = shallow(<Weather />);
  expect(weather).toMatchSnapshot();
});
