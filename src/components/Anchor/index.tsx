import { AnchorProps } from "./interface";

export default function Anchor({ link, label }: AnchorProps) {
  return (
    <a
      className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      href={link}
      target="_blank"
    >
      {label}
    </a>
  );
}
