import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { getByTestId } from '@testing-library/dom';
import renderer from "react-test-renderer";
import App from './App';
import Weather from './components/weather.component';
import { act } from "react-dom/test-utils";

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

test("rendering correctly after making the API call", async () => {

  const fakeRes = {
    name: "Paris",
    main: {
      temp: "210",
    },
    weather: [
      {
        main: "Cloudy"
      }
    ]
  }

  const fetchMock = jest.spyOn(window, "fetch").mockImplementation(() => {
    const fetchResponse = {
      json: () => Promise.resolve(fakeRes),
    }
    return fetchResponse;
  });

  render(<App /> );


  expect(fetchMock).toHaveBeenCalledTimes(1);
  
  window.fetch.mockRestore();
})
