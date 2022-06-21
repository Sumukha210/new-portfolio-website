import { StaticImageData } from "next/image";

export interface ProjectTypes {
  title: string;
  imageSrc: StaticImageData;
  description: string;
  isCodeAvailable?: boolean;
  liveDemoLink: string;
  codeLink?: string;
  tools: string[];
}
