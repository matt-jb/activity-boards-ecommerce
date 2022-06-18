import { GetServerSideProps } from "next";
import React from "react";
import { Layout } from "../../components/templates";
import { getSingleProductQuery } from "../../lib/queries";
import { IProduct } from "../../utils/types";

interface Props {
  product: IProduct;
}

export default function ProductPage({ product }: Props) {
  const { id, name, price, description, images, width, height } = product;

  return (
    <Layout title={`${name}`}>
      <div>id: {`${id}`}</div>
      <div>price: {`${price}`}</div>
      <div>description: {`${description}`}</div>
      <div>images: {`${images}`}</div>
      <div>width: {`${width}`}</div>
      <div>height: {`${height}`}</div>
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
