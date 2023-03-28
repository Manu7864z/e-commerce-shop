import Navigation from "@/components/navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>E-Commerce-Shop</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
