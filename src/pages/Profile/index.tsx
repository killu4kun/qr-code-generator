import { useLocation, useParams } from "react-router-dom";
import Anchor from "../../components/Anchor";
import useQrCode from "../../hooks/useQrCode";

export default function Profile() {
  const { name } = useParams();
  const { search } = useLocation();
  const { github, linkedin } = useQrCode();

  const queryParams = new URLSearchParams(search);
  const LINKEDIN_URL = queryParams.get("LINKEDIN_URL") as string;
  const GITHUB_URL = queryParams.get("GITHUB_URL") as string;

  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section className="flex flex-col bg-cover bg-center py-32 w-full bg-black">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center flex-col">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">{name}</h1>
              <p className="text-xl mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
              <div className="flex w-[100%] justify-around gap-8">
                <Anchor link={linkedin || LINKEDIN_URL} label="Linkedin" />
                <Anchor link={github || GITHUB_URL} label="Github" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
