import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import defaultTheme from "core/styles/defaultTheme";
import GlobalStyles from "core/styles/globalStyles";
import queryClient from "core/configs/reactQuery";
import { QueryClientProvider } from "react-query";
import { UserProvider } from "core/providers/UserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
