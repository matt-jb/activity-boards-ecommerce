import Layout from "../components/templates/Layout/Layout";
import { ProductsWrapper } from "../components/atoms";
import { ProductCard } from "../components/organisms";
import { getAllProductsQuery } from "../lib/queries";
import { IProduct } from "../utils/types";
import { Pagination } from "../components/molecules";
import { usePagination } from "../components/molecules/Pagination/usePagination";

interface Props {
  products: Array<IProduct>;
}

const Home = ({ products }: Props) => {
  const { entries, controls } = usePagination(products);

  return (
    <Layout title="Strona główna">
      <ProductsWrapper>
        {entries.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </ProductsWrapper>
      <Pagination controls={controls} />
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
