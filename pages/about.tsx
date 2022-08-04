import { OneCol, TwoCol } from "../components/atoms";
import { Layout } from "../components/templates";

export default function About() {
  return (
    <Layout title="O nas">
      <OneCol />
      <TwoCol img />
      <OneCol />
    </Layout>
  );
}
