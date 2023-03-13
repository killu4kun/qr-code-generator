import { AnchorProps } from "./interface";

export default function Anchor({ link, label }: AnchorProps) {
  return (
    <a className="py-8 border-2 border-solid " href={link} target="_blank">
      {label}
    </a>
  );
}
