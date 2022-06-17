import Head from "next/head";
import { ReactNode } from "react";
import { useAlert } from "../../../context/AlertContext";
import Alert from "../../atoms/Alert";
import PageTitle from "../../atoms/PageTitle";
import { InfoBar } from "../../molecules";
import { Footer, HeaderMenu } from "../../organisms";
import { StyledWrapper, WidthContainer } from "./Layout.styles";

interface Props {
  title: string
  children: ReactNode
}

export default function Layout({ title, children }: Props) {
  const { alerts, discardAlert } = useAlert();

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
          {alerts.map((alert) => (<Alert key={alert.id} alert={alert} discardAlert={discardAlert} />))}
          {children}
        </WidthContainer>
        <Footer />
      </StyledWrapper>
    </>
  )
}
