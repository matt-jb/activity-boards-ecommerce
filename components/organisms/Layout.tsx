import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import "../../styles/Layout.module.css";
import InfoBar from "../molecules/InfoBar";
import MainMenu from "../molecules/MainMenu";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import MainNavigation from "../molecules/MainNavigation";
import UserNav from "../molecules/UserNav";

interface Props {
  title: string
  children: ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} | Zakątek aktywności</title>
      </Head>
      <InfoBar>
        <Link href="/how-to-buy" className="infoText">Wysyłka i zwrot</Link>
        <div>Ręcznie wykonane tablice manipulacyjne</div>
        <Link href="/personalisation" className="infoText">Personalizacja</Link>
      </InfoBar>
      <MainMenu>
        <Link href="/" passHref>
          <a className="logo-container">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="Zakącik aktywności"
                className="logo"
              />
            </Link>
          </a>
        </Link>
        <MainNavigation />
        <UserNav />
      </MainMenu>
      {children}
    </>
  )
}
