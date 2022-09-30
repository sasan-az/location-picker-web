import { useEffect, useState } from "react";

const ClientComponent = (prop: { children: JSX.Element }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return <></>;
  }

  return prop.children;
};

export default ClientComponent;
