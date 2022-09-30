import type { NextPage } from "next";
import Head from "next/head";
import Login from "features/auth/pages/login";
import { AuthType } from "features/auth/types";

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register to see your locations" />
      </Head>
      <main>
        <Login authType={AuthType.REGISTER} />
      </main>
    </div>
  );
};

export default LoginPage;
