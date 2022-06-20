import { useState } from "react";
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

  return (
    <>
      {galleryMode && (
        <GalleryComponent
          onClick={() => setGalleryMode(false)}
          name={name}
          images={images}
          currImg={currImg}
          setCurrImg={setCurrImg}
        />
      )}
      <DetailsOverview>
        <ImagesSection
          name={name}
          images={images}
          currImg={currImg}
          setCurrImg={setCurrImg}
          setGalleryMode={setGalleryMode}
        />
        <ProductDescription product={product} />
      </DetailsOverview>
    </>
  );
}
