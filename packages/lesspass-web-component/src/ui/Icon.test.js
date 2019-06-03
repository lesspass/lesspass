import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon";

it("Icon renders cogs icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="cogs" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Icon renders user-secret icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="user-secret" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Icon renders question icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="question" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
