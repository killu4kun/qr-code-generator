import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import useQrCode from "../../hooks/useQrCode";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function QRCd() {
  const { name, linkedin, github } = useQrCode();
  const navigate = useNavigate();

  const oldURL = process.env.REACT_APP_DOMAIN || "http://localhost:3000/";
  const queryParams = `?LINKEDIN_URL=${linkedin}&GITHUB_URL=${github}`;
  const newURL = `${oldURL}${name}${queryParams}`;

  const handleQrCodeClick = () => {
    navigate(`/${name}${queryParams}`);
  };

  return (
    <div className="flex h-screen bg-gray-50  items-center w-screen">
      <section className="bg-cover bg-center py-32 w-full bg-[#F4F0DB] ">
        <div className="container mx-auto text-left text-white">
          <div className="md:flex items-center sm:flex flex-col flex">
            <div className="flex flex-col justify-center items-center w-1/3 text-[#ECD9BA]">
              <h1 className="text-5xl font-medium mb-6 ">{name}</h1>
              <p className="text-xl mb-12">SCAN ME</p>
            </div>
            <div className="flex justify-center w-full">
              <ArrowDownIcon className="sm:h-40 h-40 w-20 text-[#ECD9BA]" />
            </div>
            <div className="flex grow-1">
              {window.innerWidth <= 768 ? (
                <QRCode onClick={handleQrCodeClick} value={newURL} size={100} />
              ) : (
                <QRCode onClick={handleQrCodeClick} value={newURL} size={100} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
