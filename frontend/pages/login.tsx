import type { NextPage } from "next";
import Head from "next/head";
import Login from "features/auth/pages/login";
import { AuthType } from "features/auth/types";

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to see your locations" />
      </Head>
      <main>
        <Login authType={AuthType.LOGIN} />
      </main>
    </div>
  );
};

export default LoginPage;
