import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import "../../styles/Layout.module.css";
import InfoBar from "../molecules/InfoBar";
import Footer from "../organisms/Footer";
import HeaderMenu from "../organisms/HeaderMenu";

interface Props {
  title: string
  children: ReactNode
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
`

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} | Kącik aktywności</title>
      </Head>
      <StyledWrapper>
        <InfoBar />
        <HeaderMenu/>
        {children}
        <Footer/>
      </StyledWrapper>
    </>
  )
}
