import QRCode from "react-qr-code";

export default function QRCd() {
  return (
    <div className="flex items-center justify-center p-12">
      <QRCode value="https://www.linkedin.com/in/mateeus-soarees/" />
    </div>
  );
}
