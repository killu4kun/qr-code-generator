import Button from "../Button";
import Input from "../Input";

export default function Form() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[50%px]">
        <Input label="Name" placeholder="Enter your name" />
        <Input
          label="Linkedin URL"
          placeholder="https://www.linkedin.com/in/mateeus-soarees/"
        />
        <Input label="Github URL" placeholder="https://github.com/killu4kun" />
        <Button />
      </div>
    </div>
  );
}
