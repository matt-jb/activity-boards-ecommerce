import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../../utils/types";
import { getShortDescription } from "../../../utils/utils";
import IconDelete from "../../assets/IconDelete";
import IconGears from "../../assets/IconGears";
import { StyledProductCard } from "./ProductCard.styles";

interface Props {
  product: IProduct
}

export default function ProductCard({ product }: Props) {
  const { id, name, slug, images, description, price } = product;

  return (
    <StyledProductCard>
      <div className="imageContainer">
        <>
          <div className="editContainer" title="Edytuj produkt">
            <IconGears className="icon edit" />
          </div>
          <div className="deleteContainer" title="Usuń produkt">
            <IconDelete className="icon delete" />
          </div>
        </>
        <Image
          src={images[0]}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="name">{name}</div>
      <div className="description">
        {getShortDescription(description)}
        <Link href={`/${id}/${slug}`} passHref>
          <a className="ctaMore">Więcej -&gt;</a>
        </Link>
      </div>
      <div className="price"><span className="desc">Cena</span>: <span className="tag">{price},00</span> zł</div>
      <div className="ctaWrapper">
        <Link href={`/${id}/${slug}`} passHref><div className="more">Więcej</div></Link>
        <div className="addToCart">Do koszyka</div>
      </div>
    </StyledProductCard>
  )
}
