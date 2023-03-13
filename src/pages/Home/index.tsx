import Form from "./components/Form";
import QRCd from "../../components/QRCode";
import useQrCode from "../../hooks/useQrCode";

export default function Home() {
  const { finished } = useQrCode();

  return finished ? <QRCd /> : <Form />;
}
