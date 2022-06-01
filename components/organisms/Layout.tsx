import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";
import "../../styles/Layout.module.css";

interface Props {
  title: string
  children: ReactNode
}

const InfoWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.4rem 0;
  background-color: #608ac8cc;
`

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
  font-family: 'Poppins', serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  > * {
    color: #fff;
    text-decoration: none;
  }
`

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} | Zakątek aktywności</title>
      </Head>
      <InfoWrapper>
        <InfoBar>
          <Link href="/how-to-buy" className="infoText">Wysyłka i zwrot</Link>
          <div>Ręcznie wykonane tablice manipulacyjne</div>
          <Link href="/personalisation" className="infoText">Personalizacja</Link>
        </InfoBar>
      </InfoWrapper>
      {children}
    </>
  )
}
