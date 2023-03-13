import { useContext } from "react";
import { QrCodeContext } from "../../contexts/qrcode";
import { QrCodeContextProps } from "../../contexts/qrcode/interface";

export default function useQrCode(): QrCodeContextProps {
  const context = useContext(QrCodeContext);

  return context;
}
