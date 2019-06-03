import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import InputNumber from "./InputNumber";

it("InputNumber renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputNumber />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("InputNumber increment", () => {
  const mockCallback = jest.fn();
  const inputNumber = shallow(
    <InputNumber value={16} onChange={mockCallback} />
  );
  inputNumber.find("span#increment").simulate("click");
  expect(mockCallback.mock.calls[0][0]).toBe(17);
});

it("InputNumber decrement", () => {
  const mockCallback = jest.fn();
  const inputNumber = shallow(
    <InputNumber value={16} onChange={mockCallback} />
  );
  inputNumber.find("span#decrement").simulate("click");
  expect(mockCallback.mock.calls[0][0]).toBe(15);
});
