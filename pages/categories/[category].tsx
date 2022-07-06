import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ProductsWrapper, Spinner } from "../../components/atoms";
import { Pagination } from "../../components/molecules";
import { usePagination } from "../../components/molecules/Pagination/usePagination";
import { ProductCard } from "../../components/organisms";
import { Layout } from "../../components/templates";
import { getCategoryQuery } from "../../lib/queries";
import { IProduct } from "../../utils/types";
import { sizes, SizesType } from "../../utils/utils";

interface Props {
  category: Array<IProduct>;
}

export default function Category({ category }: Props) {
  const router = useRouter();
  const cat = router.query.category as SizesType;
  const { entries, controls } = usePagination(category);

  if (!sizes[cat]) {
    router.push("/404");
    return <Spinner />;
  }

  return (
    <Layout title={`Rozmiar tablic: ${sizes[cat]}`}>
      <ProductsWrapper>
        {entries.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </ProductsWrapper>
      <Pagination controls={controls} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = await getCategoryQuery(context?.params?.category as string);

  return {
    props: {
      category,
    },
  };
};
