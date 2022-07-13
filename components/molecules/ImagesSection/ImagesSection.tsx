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
  handleCurrImg: (img: number) => void;
  handleGalleryMode: (val: boolean) => void;
}

export default function ImagesSection({
  name,
  images,
  currImg,
  handleCurrImg,
  handleGalleryMode,
}: Props) {
  return (
    <StyledImagesSection>
      <MainImageContainer
        onClick={() => handleGalleryMode(true)}
        data-testid="main-product-image"
      >
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
            onClick={() => handleCurrImg(i)}
          >
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </GalleryImageContainer>
        ))}
      </GallerySection>
    </StyledImagesSection>
  );
}
