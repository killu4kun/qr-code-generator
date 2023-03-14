import { BrowserRouter } from "react-router-dom";
import QrCodeProvider from "./contexts/qrcode";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <QrCodeProvider>
        <Routes />
      </QrCodeProvider>
    </BrowserRouter>
  );
}

export default App;
