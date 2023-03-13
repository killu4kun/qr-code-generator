import React, { ReactNode } from "react";

export interface QrCodeProps {
  children: ReactNode;
}

export interface QrCodeContextProps {
  qrCode?: string;
  setQrCode?: (qrCode: string) => void;
  name: string;
  setName: (name: string) => void;
  github: string;
  setGithub: (github: string) => void;
  linkedin: string;
  setLinkedin: (linkedin: string) => void;
}
