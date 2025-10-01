// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Advit-Realty</title>
        <meta
          name="description"
          content="Find properties for sale and rent in India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <LandingPage />
      </main>
    </>
  );
};

export default Home;
