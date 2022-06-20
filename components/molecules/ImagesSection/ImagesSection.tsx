import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  GalleryImageContainer,
  GallerySection,
  MainImageContainer,
  StyledImagesSection,
} from "./ImagesSection.styles";

interface Props {
  name: string;
  images: Array<string | StaticImageData>;
  currImg: number;
  setCurrImg: (img: number) => void;
  setGalleryMode: (val: boolean) => void;
}

export default function ImagesSection({
  name,
  images,
  currImg,
  setCurrImg,
  setGalleryMode,
}: Props) {
  return (
    <StyledImagesSection>
      <MainImageContainer onClick={() => setGalleryMode(true)}>
        <Image
          src={images[currImg]}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </MainImageContainer>
      <GallerySection>
        {images.map((image, i) => (
          <GalleryImageContainer
            key={`${name}${i}`}
            onClick={() => setCurrImg(i)}
          >
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="active"
            />
          </GalleryImageContainer>
        ))}
      </GallerySection>
    </StyledImagesSection>
  );
}
