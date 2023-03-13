import { render } from "@testing-library/react";
import { QrCodeContext } from "./";

test("renders QrCodeProvider", () => {
  const { getByText } = render(
    <QrCodeContext.Provider
      value={{
        github: "",
        name: "",
        setGithub: jest.fn(),
        setName: jest.fn(),
        linkedin: "",
        setLinkedin: jest.fn(),
        finished: false,
        setFinished: jest.fn(),
      }}
    >
      <div>Test</div>
    </QrCodeContext.Provider>
  );
  expect(getByText("Test")).toBeInTheDocument();
});
