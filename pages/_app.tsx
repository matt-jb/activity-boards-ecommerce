import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import "../styles/_app.css";

const GlobalStyle = createGlobalStyle`
:root {
  --maxWidth: 120rem;
  --white: #fff;
  --black: #111;
  --pink: ff708a;
  --lightGrey: #ddd;
  --lightBlue: #608ac8cc;
  --pink: #ff708a;
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

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px
}

body {
  font-weight: 400;
  line-height: 1.6;
}

input, button, textarea, select {
  font: inherit;
}`


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}