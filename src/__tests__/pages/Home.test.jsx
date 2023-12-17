// pages
import Home from "../../pages/Home";

// helpers
// import { render } from "../utils/render";
import { renderWithRedux } from "../utils/renderWithRedux";

describe("tests for the Home page", () => {
  it("should render the Home page", () => {
    const { getByTestId } = renderWithRedux(<Home />);

    expect(getByTestId("home-page")).toBeInTheDocument();
  });
});

