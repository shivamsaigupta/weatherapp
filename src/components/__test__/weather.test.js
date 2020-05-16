import React from 'react';
import ReactDOM from 'react-dom';
import Weather from '../weather.component';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Weather />, div);
})

it("renders weather details correctly", () => {
    const {getByTestId} = render(<Weather location="Mumbai" temp="234" precip="Sunny"></Weather> );
    expect(getByTestId("location")).toHaveTextContent("Mumbai");
    expect(getByTestId("temp")).toHaveTextContent("234");
    expect(getByTestId("precip")).toHaveTextContent("Sunny");
})

it("renders weather details correctly 2", () => {
    const {getByTestId} = render(<Weather location="Delhi" temp="190" precip="Rain"></Weather> );
    expect(getByTestId("location")).toHaveTextContent("Delhi");
    expect(getByTestId("temp")).toHaveTextContent("190");
    expect(getByTestId("precip")).toHaveTextContent("Rain");
})

it("matches snapshot", () => {
    const tree = renderer.create(<Weather location="Mumbai" temp="234" precip="Sunny"></Weather> ).toJSON();    
    expect(tree).toMatchSnapshot();
})