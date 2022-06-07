import Head from "next/head";
import { ReactNode } from "react";
import "../../../styles/Layout.module.css";
import { InfoBar } from "../../molecules/index";
import { Footer } from "../../organisms/index";
import { HeaderMenu } from "../../organisms/index";
import { StyledWrapper } from "./Layout.styles";

interface Props {
  title: string
  children: ReactNode
}

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
