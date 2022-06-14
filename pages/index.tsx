import type { NextPage } from 'next';
import Layout from '../components/templates/Layout/Layout';
import { dummyProducts } from '../utils/utils';
import ProductsWrapper from '../components/atoms/ProductsWrapper';
import { ProductCard } from '../components/organisms';

const Home: NextPage = () => {
  return (
    <Layout title="Strona główna">
        <ProductsWrapper>
          {dummyProducts.map((el) => (
            <ProductCard
              key={el.id}
              product={el}
            />
          ))}
          {dummyProducts.map((el) => (
            <ProductCard
              key={el.id}
              product={el}
            />
          ))}
        </ProductsWrapper>
    </Layout>
  )
}

export default Home
