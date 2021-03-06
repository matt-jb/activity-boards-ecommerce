import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { ReactNode } from "react";
import { useAlert } from "../../../context/AlertContext";
import { Alert } from "../../atoms";
import { PageTitle } from "../../atoms";
import { InfoBar } from "../../molecules";
import { Footer, HeaderMenu } from "../../organisms";
import {
  AlertsContainer,
  StyledWrapper,
  WidthContainer,
} from "./Layout.styles";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  const { alerts, discardAlert } = useAlert();

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
        <WidthContainer>{children}</WidthContainer>
        <Footer />
        {alerts && (
          <AlertsContainer>
            <AnimatePresence>
              {alerts.map((alert) => (
                <Alert
                  key={alert.id}
                  alert={alert}
                  discardAlert={discardAlert}
                />
              ))}
            </AnimatePresence>
          </AlertsContainer>
        )}
      </StyledWrapper>
    </>
  );
}
