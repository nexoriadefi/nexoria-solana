import type { NextPage } from "next";
import Head from "next/head";
import { RevokeView } from "../views";
import Footer from "components/Footer";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Nexoria - Your Solana Helper</title>
        <meta name="description" content="Nexoria help you in the solana ecosystem" />
      </Head>
      <RevokeView />
      <Footer/>
    </div>
  );
};

export default Home;