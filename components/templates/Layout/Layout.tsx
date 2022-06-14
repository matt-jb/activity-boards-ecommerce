import Head from "next/head";
import { ReactNode } from "react";
import "../../../styles/Layout.module.css";
import PageTitle from "../../atoms/PageTitle";
import { InfoBar } from "../../molecules/index";
import { Footer } from "../../organisms/index";
import { HeaderMenu } from "../../organisms/index";
import { StyledWrapper, WidthContainer } from "./Layout.styles";

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
        <HeaderMenu />
        <PageTitle title={title} />
        <WidthContainer>
          {children}
        </WidthContainer>
        <Footer/>
      </StyledWrapper>
    </>
  )
}
