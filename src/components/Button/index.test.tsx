import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render button", () => {
    const { getByText } = render(<Button label="test" />);
    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render button with label", () => {
    const { getByText } = render(<Button label="test" />);
    expect(getByText("test")).toHaveTextContent("test");
  });

  it("should render button with disabled", () => {
    const { getByText } = render(<Button label="test" disabled={true} />);
    expect(getByText("test")).toHaveAttribute("disabled");
  });
});
