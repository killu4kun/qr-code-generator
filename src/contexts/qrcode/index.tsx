import { createContext, useState } from "react";
import { QrCodeContextProps, QrCodeProps } from "./interface";

export const QrCodeContext = createContext({} as QrCodeContextProps);

export default function QrCodeProvider({ children }: QrCodeProps) {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [finished, setFinished] = useState(false);
  return (
    <QrCodeContext.Provider
      value={{ github, name, setGithub, setName, linkedin, setLinkedin, finished, setFinished }}
    >
      {children}
    </QrCodeContext.Provider>
  );
}
