import { FullScreenImageContainer, Gallery } from "./Gallery.styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { useSwipeable } from "react-swipeable";
import { MouseEvent } from "react";

interface Props {
  name: string;
  images: Array<string | StaticImageData>;
  currImg: number;
  setCurrImg: (img: number) => void;
  onClick: () => void;
}

export default function GalleryComponent({
  name,
  images,
  currImg,
  setCurrImg,
  onClick,
}: Props) {
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
