import { Route, Routes as Rotas } from "react-router-dom";
import QrCodeProvider from "../contexts/qrcode";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const Routes = () => {
  return (
    <QrCodeProvider>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Profile />} />
    </QrCodeProvider>
  );
};
