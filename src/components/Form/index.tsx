import { useNavigate } from "react-router-dom";
import useQrCode from "../../hooks/useQrCode";
import Button from "../Button";
import Input from "../Input";

export default function Form() {
  const { name, linkedin, github, setName, setLinkedin, setGithub } =
    useQrCode();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${name}`);
  };

  const handleDisabled = () => {
    if (name.length !== 0 && linkedin.length !== 0 && github.length !== 0) {
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[50%px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center mx-auto w-full max-w-[50%px]"
        >
          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Linkedin URL"
            placeholder="https://www.linkedin.com/in/mateeus-soarees/"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <Input
            label="Github URL"
            placeholder="https://github.com/killu4kun"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <Button disabled={handleDisabled()} label="Generate Image" />
        </form>
      </div>
    </div>
  );
}
