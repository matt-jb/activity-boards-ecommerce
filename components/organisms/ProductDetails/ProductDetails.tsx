import { useEffect, useState } from "react";
import { IProduct } from "../../../utils/types";
import {
  GalleryComponent,
  ImagesSection,
  ProductDescription,
} from "../../molecules";
import { DetailsOverview } from "./ProductDetails.styles";

interface Props {
  product: IProduct;
}

export default function ProductDetails({ product }: Props) {
  const { name, images } = product;
  const [currImg, setCurrImg] = useState(0);
  const [galleryMode, setGalleryMode] = useState(false);

  function handleCurrImg(img: number) {
    setCurrImg(img);
  }

  function handleGalleryMode(val: boolean) {
    setGalleryMode(val);
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    document.body.style.overflow = galleryMode ? "hidden" : "unset";
  }, [galleryMode]);

  return (
    <>
      {galleryMode && (
        <GalleryComponent
          onClick={() => handleGalleryMode(false)}
          name={name}
          images={images}
          currImg={currImg}
          handleCurrImg={handleCurrImg}
        />
      )}
      <DetailsOverview>
        <ImagesSection
          name={name}
          images={images}
          currImg={currImg}
          handleCurrImg={handleCurrImg}
          handleGalleryMode={handleGalleryMode}
        />
        <ProductDescription product={product} />
      </DetailsOverview>
    </>
  );
}
