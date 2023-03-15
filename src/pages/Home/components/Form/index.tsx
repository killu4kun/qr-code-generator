import useQrCode from "../../../../hooks/useQrCode";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const {
    name = "",
    linkedin = "",
    github = "",
    setName,
    setLinkedin,
    setGithub,
    setFinished,
  } = useQrCode();

  const verifyIfValidLinkedin =
    /^https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/[\w-]+\/?$/;

  const verifyIfValidGithub = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/?$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (linkedin.length > 0 && !verifyIfValidLinkedin.test(linkedin)) {
      return toast.error("Invalid linkedin URL", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (github.length > 0 && !verifyIfValidGithub.test(github)) {
      return toast.error("Invalid github", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setFinished(true);
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
            placeholder="https://www.linkedin.com/in/mateeus-soarees/"
            value={linkedin}
            label="Linkedin URL"
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <ToastContainer />
          <Input
            label="Github URL"
            placeholder="https://github.com/killu4kun"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <Button
            aria-label="button-name"
            disabled={handleDisabled()}
            label="Generate Image"
          />
        </form>
      </div>
    </div>
  );
}
