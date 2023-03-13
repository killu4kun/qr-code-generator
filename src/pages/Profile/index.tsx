import Anchor from "../../components/Anchor";
import useQrCode from "../../hooks/useQrCode";

export default function Profile() {
  const { github, linkedin, name } = useQrCode();
  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section className="bg-cover bg-center py-32 w-full bg-black">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">{name}</h1>
              <p className="text-xl mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
              <div className="flex w-[100%] justify-around">
                <Anchor link={linkedin} label="Linkedin" />
                <Anchor link={github} label="Github" />
              </div>
            </div>
            <div className="w-1/2 pl-16">
              <img
                src="https://source.unsplash.com/random?ux"
                className="h-64 w-full object-cover rounded-xl"
                alt="Layout Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
