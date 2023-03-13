import { fireEvent, render } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("should render input", () => {
    const { getByLabelText } = render(<Input label="test" />);
    expect(getByLabelText("test")).toBeInTheDocument();
  });

  it("should render input with label", () => {
    const { getByLabelText } = render(
      <Input label="test" placeholder="test" />
    );
    expect(getByLabelText("test")).toHaveAttribute("placeholder", "test");
  });

  it("should render input with placeholder", () => {
    const { getByLabelText } = render(
      <Input label="test" placeholder="test" />
    );
    expect(getByLabelText("test")).toHaveAttribute("placeholder", "test");
  });

  it("should render input with value", () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Input label="test" value="test" onChange={handleChange} />
    );
    expect(getByLabelText("test")).toHaveAttribute("value", "test");
  });
});
