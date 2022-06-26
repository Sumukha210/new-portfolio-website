import React from "react";
import NextImage from "next/image";
import Button from "@/elements/Button";
import { ArticleTypes } from "@/utils/types";
import { CustomCard, Content } from "./CardStyles";

const Card: React.FC<ArticleTypes> = ({
  title,
  cover_image,
  description,
  url,
}) => {
  return (
    <CustomCard>
      <figure>
        {cover_image ? (
          <NextImage
            layout="responsive"
            height="80px"
            width="100%"
            objectFit="cover"
            src={cover_image}
            alt={`${title} Image`}
          />
        ) : (
          ""
        )}
      </figure>
      <Content>
        <div>
          <h3 className="title subtitle-3">{title}</h3>
          <p className="description subtitle-5">{description}</p>
        </div>
        <div>
          <Button
            size="small"
            name="Read Now"
            isOutlineBtn
            btnHandler={() => {
              window.open(url, "_blank");
            }}
          />
        </div>
      </Content>
    </CustomCard>
  );
};

export default Card;
