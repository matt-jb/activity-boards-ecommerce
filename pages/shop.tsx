import Layout from "../components/templates/Layout/Layout";
import { ProductsWrapper } from "../components/atoms";
import { ProductCard } from "../components/organisms";
import { getAllProductsQuery } from "../lib/queries";
import { IProduct } from "../utils/types";

interface Props {
  products: Array<IProduct>;
}

const Shop = ({ products }: Props) => {
  return (
    <Layout title="Sklep">
      <ProductsWrapper>
        {products.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </ProductsWrapper>
    </Layout>
  );
};

export default Shop;

export async function getStaticProps() {
  const products = await getAllProductsQuery();

  return {
    props: {
      products,
    },
  };
}
