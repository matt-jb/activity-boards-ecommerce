import Image from "next/image";
import { MouseEvent, useState } from "react";
import { IProduct } from "../../../utils/types";
import {
  DescriptionSection,
  GalleryImageContainer,
  GallerySection,
  ImagesSection,
  MainImageContainer,
  DetailsOverview,
  Gallery,
  FullScreenImageContainer,
  ActionButton,
  ButtonsContainer,
} from "./ProductDetails.styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

interface Props {
  product: IProduct;
}

export default function ProductDetails({ product }: Props) {
  const { id, name, price, description, images, width, height } = product;
  const [currImg, setCurrImg] = useState(0);
  const [galleryMode, setGalleryMode] = useState(false);
  const length = images.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => prevImg(),
    onSwipedRight: () => nextImg(),
    onSwipedDown: () => null,
  });

  function nextImg(e?: MouseEvent) {
    setCurrImg(currImg === length - 1 ? 0 : currImg + 1);
    e?.stopPropagation();
  }

  function prevImg(e?: MouseEvent) {
    setCurrImg(currImg === 0 ? length - 1 : currImg - 1);
    e?.stopPropagation();
  }

  return (
    <>
      {galleryMode && (
        <Gallery onClick={() => setGalleryMode(false)}>
          <FaArrowAltCircleLeft onClick={(e) => prevImg(e)} className="prev" />
          <FullScreenImageContainer {...handlers}>
            <Image
              src={images[currImg]}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </FullScreenImageContainer>
          <FaArrowAltCircleRight onClick={(e) => nextImg(e)} className="next" />
        </Gallery>
      )}
      <DetailsOverview>
        <ImagesSection>
          <MainImageContainer onClick={() => setGalleryMode((prev) => !prev)}>
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
                <Image src={image} alt={name} layout="fill" objectFit="cover" />
              </GalleryImageContainer>
            ))}
          </GallerySection>
        </ImagesSection>
        <DescriptionSection>
          <p>
            <span>Nazwa</span>: {name}
          </p>
          <p>
            <span>Cena</span>: {price},00 zł
          </p>
          <p>
            <span>Opis</span>: {description}
          </p>
          <p>
            <span>Wymiary</span> (szer. x wys.): {width} cm x {height} cm
          </p>
          <ButtonsContainer>
            <ActionButton onClick={() => console.log(`Added to cart!`)} cart>
              Dodaj do koszyka
            </ActionButton>
            <ActionButton onClick={() => console.log(`Added to wish list!`)}>
              Dodaj do listy życzeń
            </ActionButton>
          </ButtonsContainer>
        </DescriptionSection>
      </DetailsOverview>
    </>
  );
}
