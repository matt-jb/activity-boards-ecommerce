import Layout from "../components/templates/Layout/Layout";
import { ProductsWrapper } from "../components/atoms";
import { ProductCard } from "../components/organisms";
import { getAllProductsQuery } from "../lib/queries";
import { IProduct } from "../utils/types";

interface Props {
  products: Array<IProduct>;
}

const Home = ({ products }: Props) => {
  console.log(products);

  return (
    <Layout title="Strona główna">
      <ProductsWrapper>
        {products.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </ProductsWrapper>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getAllProductsQuery();

  return {
    props: {
      products,
    },
  };
}
