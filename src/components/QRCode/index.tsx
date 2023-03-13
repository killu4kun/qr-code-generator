import { ArrowBendRightDown } from "@phosphor-icons/react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import useQrCode from "../../hooks/useQrCode";

export default function QRCd() {
  const { name } = useQrCode();
  const navigate = useNavigate();

  const handleQrCodeClick = () => {
    navigate(`/${name}`);
  };

  return (
    <div className="flex w-screen h-screen flex-col items-center inset-0 justify-around p-12 bg-[#FFFAF1]">
      <h2 className="text-4xl font-bold text-[#DEC19B]">{name}</h2>
      <div className="hover:shadow-form rounded-md  py-3 px-8 text-center text-base text-xl font-semibold text-[#DEC19B] outline-none">
        SCAN ME
      </div>
        <ArrowBendRightDown color='black' size={150} />
      <QRCode onClick={handleQrCodeClick} value="teste" />
    </div>
  );
}
