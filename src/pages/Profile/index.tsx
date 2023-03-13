import Anchor from "../../components/Anchor";
import useQrCode from "../../hooks/useQrCode";

export default function Profile() {
  const { github, linkedin } = useQrCode();
  return (
    <>
      <div>Profile</div>
      <Anchor label="Github" link={github} />
      <Anchor label="Linkedin" link={linkedin} />
    </>
  );
}
