import React from "react";
import NextImage from "next/image";
import Button from "@/elements/Button";
import { ProjectTypes } from "./types";
import { CustomCard, CardContent } from "./CardStyles";

const Card: React.FC<ProjectTypes> = ({
  title,
  imageSrc,
  description,
  isCodeAvailable = true,
  liveDemoLink,
  codeLink,
  tools,
}) => {
  return (
    <CustomCard>
      <figure>
        <NextImage
          src={imageSrc}
          placeholder="blur"
          objectFit="cover"
          layout="responsive"
          alt={`${title} image`}
        />
      </figure>

      <CardContent>
        <div className="tools">
          {tools.map(tool => (
            <h4 className="smallText-3 tool" key={tool}>
              <span> {tool}</span>
            </h4>
          ))}
        </div>

        <div className="content">
          <h3 className="title subtitle-2">{title}</h3>
          <p className="description subtitle-5">{description}</p>

          <div className="btnContainer">
            <Button
              size="small"
              name="Live Demo"
              btnHandler={() => {
                window.open(liveDemoLink, "_blank");
              }}
            />

            {isCodeAvailable && codeLink && (
              <Button
                size="small"
                name="Code"
                isOutlineBtn
                btnHandler={() => {
                  window.open(codeLink, "_blank");
                }}
              />
            )}
          </div>
        </div>
      </CardContent>
    </CustomCard>
  );
};

export default Card;
