import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import WidthContainer from '../components/atoms/WidthContainer';
import Layout from '../components/templates/Layout/Layout';
import image from '../public/img/tablica.jpg';
import { getShortDescription, lorem } from '../utils/utils';

const arr = [1, 2, 3, 4, 5, 6]

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
  margin: 2rem 0;
`

const StyledProductCard = styled.div`
  width: 100%;
  height: 25rem;
  border: 2px solid #e6e6e6;
  border-radius: 3rem;
  overflow: hidden;
  background-color: var(--white);
  transition: all .2s;
  font-family: 'Poppins', serif;

  & .imageContainer {
    position: relative;
    float: left;
    height: 100%;
    width: 50%;
    margin-right: 1rem;
    overflow: hidden;

    & img {
      
    }
  }

  & .name {
    margin: 1.3rem 0;
    font-family: 'Dosis', serif;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  & .description {
    font-size: 1.2rem;
  }

  & .price {
    margin: 1.3rem 0;
    font-size: 1.4rem;

    & .desc {
      font-weight: 600;
    }
  }

  &:hover {
    box-shadow: 0.1rem 1.2rem 1.9rem 0rem rgba(0,0,0,0.17);
    border: 2px solid var(--pink);
  }
`

const Home: NextPage = () => {
  return (
    <Layout title="Strona główna">
      <WidthContainer>
        <StyledProductsWrapper>
          {arr.map((el, i) => (
            <StyledProductCard key={i}>
              <div className="imageContainer">
                <Image
                  src={image}
                  alt="Tablica manipulacyjna"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="name">Tablica manipulacyjna</div>
              <div className="description">{getShortDescription(lorem)} <span className="ctaMore">Więcej -&gt;</span></div>
              <div className="price"><span className="desc">Cena</span>: <span className="tag">499</span> zł</div>
            </StyledProductCard>
          ))}
        </StyledProductsWrapper>
      </WidthContainer>
    </Layout>
  )
}

export default Home
