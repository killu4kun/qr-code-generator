import { ArrowRight } from "@phosphor-icons/react";
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
    <div className="h-screen bg-gray-50 flex items-center w-screen">
      <section className="bg-cover bg-center py-32 w-full bg-[#F4F0DB] ">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center ">
            <div className="w-1/3 text-[#ECD9BA]">
              <h1 className="text-5xl font-medium mb-6 ">{name}</h1>
              <p className="text-xl mb-12">SCAN ME</p>
            </div>
            <div className="w-1/3">
              <ArrowRight
                size={window.innerWidth <= 768 ? 75 : 150}
                color="#ECD9BA"
              />
            </div>
            <div className="flex grow-1">
              {window.innerWidth <= 768 ? (
                <QRCode onClick={handleQrCodeClick} value="teste" size={50} />
              ) : (
                <QRCode onClick={handleQrCodeClick} value="teste" size={100} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
