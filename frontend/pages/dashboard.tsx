import type { NextPage } from "next";
import Head from "next/head";
import AuthorizeRoute from "core/components/AuthorizeRoute/AuthorizeRoute";
import Home from "features/dashboard/pages/Home";

const DashboardPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to see your locations" />
      </Head>
      <AuthorizeRoute>
        <main>
          <Home />
        </main>
      </AuthorizeRoute>
    </div>
  );
};

export default DashboardPage;
