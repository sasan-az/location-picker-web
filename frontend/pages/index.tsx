import type { NextPage } from "next";
import Head from "next/head";
import Walkthrough from "features/walkthrough/pages/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Location Picker</title>
        <meta name="description" content="Great for share your location!" />
      </Head>

      <main>
        <Walkthrough />
      </main>
    </div>
  );
};

export default HomePage;
