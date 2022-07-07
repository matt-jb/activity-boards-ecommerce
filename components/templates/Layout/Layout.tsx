import Head from "next/head";
import { ReactNode } from "react";
import { useAlert } from "../../../context/AlertContext";
import { useAuth } from "../../../context/AuthContext";
import { Alert } from "../../atoms";
import { PageTitle } from "../../atoms";
import { InfoBar } from "../../molecules";
import { Footer, HeaderMenu } from "../../organisms";
import { StyledWrapper, WidthContainer } from "./Layout.styles";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  const { alerts, discardAlert } = useAlert();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Kącik aktywności</title>
      </Head>
      <StyledWrapper>
        <InfoBar />
        <HeaderMenu />
        <PageTitle title={title} />
        <WidthContainer>
          {alerts.map((alert) => (
            <Alert key={alert.id} alert={alert} discardAlert={discardAlert} />
          ))}
          {children}
        </WidthContainer>
        <Footer />
      </StyledWrapper>
    </>
  );
}
