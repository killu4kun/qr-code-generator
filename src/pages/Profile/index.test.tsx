import { render } from "@testing-library/react";
import Profile from ".";

describe("Profile", () => {
  it("should render the profile page", () => {
    const { getByText } = render(<Profile />);

    expect(getByText(/lorem/i)).toBeInTheDocument();
  });
});
