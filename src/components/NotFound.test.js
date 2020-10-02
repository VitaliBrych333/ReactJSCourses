import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import NotFound from "./NotFound";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

describe("<NotFound/>", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders with string No films found", () => {
    act(() => {
      render(<NotFound />, container);
    });
    expect(container.textContent).toBe("No films found");
  });

  it("should render the component", () => {
    const wrapper = shallow(<NotFound />).dive();
    ReactDOM.render(<NotFound />, container);
    ReactDOM.unmountComponentAtNode(container);
  });
});
