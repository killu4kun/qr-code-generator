import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import QRCd from ".";

describe("QRCd", () => {
  it("should render qrcode", () => {
    const { getByText } = render(
      <BrowserRouter>
        <QRCd />
      </BrowserRouter>
    );
    expect(getByText("SCAN ME")).toBeInTheDocument();
  });
});
