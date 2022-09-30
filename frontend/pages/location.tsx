import type { NextPage } from "next";
import Head from "next/head";
import LocationForm from "features/dashboard/pages/LocationForm";
import AuthorizeRoute from "core/components/AuthorizeRoute";

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Locations</title>
        <meta name="description" content="Create or edit location" />
      </Head>
      <AuthorizeRoute>
        <main>
          <LocationForm />
        </main>
      </AuthorizeRoute>
    </div>
  );
};

export default LoginPage;
