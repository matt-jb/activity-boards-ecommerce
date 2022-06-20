import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import AllContextsWrapper from "../context/AllContextsWrapper";
import ProtectedRoute from "../components/atoms/ProtectedRoute";
import "../styles/_app.css";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
  }

  :root {
    --maxWidth: 120rem;
    --white: #fff;
    --black: #111;
    --lightGrey: #ddd;
    --lightGrey2: #eee;
    --darkGrey: #444;
    --lightBlue: #608ac8cc;
    --lightBlue2: #83aae4cc;
    --darkBlue: #213a5f;
    --pink: #ff708a;
    --intensivePink: #ff4b6c;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-weight: 400;
    line-height: 1.6;
    font-family: 'Poppins', serif;
  }

  input, button, textarea, select {
    font: inherit;
  }
`;

const authRequired = ["/account", "/edit"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AllContextsWrapper>
      <GlobalStyle />
      {authRequired.includes(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </AllContextsWrapper>
  );
}
