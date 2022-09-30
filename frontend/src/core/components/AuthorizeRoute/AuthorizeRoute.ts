import { useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import { userTokenKey } from "core/constants/cookies";
import { useRouter } from "next/router";

const AuthorizeRoute = (prop: any) => {
  const { replace } = useRouter();

  const token = useMemo(() => Cookies.get(userTokenKey), []);

  useEffect(() => {
    if (!token) {
      replace("/").then(() => {});
    }
  }, [token, replace]);

  return prop.children;
};

export default AuthorizeRoute;
