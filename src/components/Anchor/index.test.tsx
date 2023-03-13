import { render } from "@testing-library/react";
import Anchor from ".";

describe("Anchor", () => {
  it("should render anchor", () => {
    const { getByText } = render(<Anchor link="test" label="test" />);
    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render anchor with link", () => {
    const { getByText } = render(<Anchor link="test" label="test" />);
    expect(getByText("test")).toHaveAttribute("href", "test");
  });

  it("should render anchor with target", () => {
    const { getByText } = render(<Anchor link="test" label="test" />);
    expect(getByText("test")).toHaveAttribute("target", "_blank");
  });

  it("should render anchor with label", () => {
    const { getByText } = render(<Anchor link="test" label="test" />);
    expect(getByText("test")).toHaveTextContent("test");
  });
});
