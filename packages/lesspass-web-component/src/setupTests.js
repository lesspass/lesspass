import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const spy = jest.spyOn(global.console, "error");

afterEach(() => {
  expect(spy).not.toHaveBeenCalled();
});
