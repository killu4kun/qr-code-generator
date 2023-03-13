import { getByRole, render, screen } from "@testing-library/react";
import Form from "./";

describe("Form", () => {
  it("should render the inputs and button", () => {
    const { getByPlaceholderText, getByLabelText } = render(<Form />);

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Linkedin URL")).toBeInTheDocument();
    expect(getByLabelText("Github URL")).toBeInTheDocument();
  });
});
