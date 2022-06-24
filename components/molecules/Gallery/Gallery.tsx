import { FullScreenImageContainer, Gallery } from "./Gallery.styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { useSwipeable } from "react-swipeable";
import { MouseEvent } from "react";

interface Props {
  name: string;
  images: Array<string | StaticImageData>;
  currImg: number;
  handleCurrImg: (img: number) => void;
  onClick: () => void;
}

export default function GalleryComponent({
  name,
  images,
  currImg,
  handleCurrImg,
  onClick,
}: Props) {
  const length = images.length;
  const handlers = useSwipeable({
    onSwipedLeft: () => prevImg(),
    onSwipedRight: () => nextImg(),
  });

  function nextImg(e?: MouseEvent) {
    handleCurrImg(currImg === length - 1 ? 0 : currImg + 1);
    e?.stopPropagation();
  }

  function prevImg(e?: MouseEvent) {
    handleCurrImg(currImg === 0 ? length - 1 : currImg - 1);
    e?.stopPropagation();
  }

  return (
    <Gallery onClick={() => onClick()}>
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
  );
}
