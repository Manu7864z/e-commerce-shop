import Navigation from "@/components/navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Head>
          <title>E-Commerce-Shop</title>
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
