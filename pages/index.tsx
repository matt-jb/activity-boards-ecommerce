import type { NextPage } from 'next';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Strona główna">
      <p style={{height: `20rem`, backgroundColor: `white`, zIndex: -1}}>Hello world!</p>
    </Layout>
  )
}

export default Home
