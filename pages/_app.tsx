import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import SidebarWithHeader from "./components/SidebarWithHeader";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SidebarWithHeader>
        <Component {...pageProps} />
      </SidebarWithHeader>
    </ChakraProvider>
  );
}

export default App;
