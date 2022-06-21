import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo.png";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="logo-container">
        <Image src={logo} alt="Zakącik aktywności" className="logo" />
      </a>
    </Link>
  );
}
