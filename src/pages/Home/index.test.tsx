import { render } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  it("should render the form", () => {
    const { getByPlaceholderText, getByLabelText } = render(<Home />);

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Linkedin URL")).toBeInTheDocument();
    expect(getByLabelText("Github URL")).toBeInTheDocument();
  });
});
