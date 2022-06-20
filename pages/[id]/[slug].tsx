import { GetServerSideProps } from "next";
import React, { useState } from "react";
import ProductDetails from "../../components/organisms/ProductDetails/ProductDetails";
import { Layout } from "../../components/templates";
import { getSingleProductQuery } from "../../lib/queries";
import { IProduct } from "../../utils/types";

interface Props {
  product: IProduct;
}

export default function ProductPage({ product }: Props) {
  const { name } = product;

  return (
    <Layout title={`${name}`}>
      <ProductDetails product={product} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const product = await getSingleProductQuery(context?.params?.id as string);

  return {
    props: {
      product,
    },
  };
};
