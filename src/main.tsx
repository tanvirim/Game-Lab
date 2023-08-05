import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "bootstrap/dist/css/bootstrap.css";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import theme from "./components/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
          <ReactQueryDevtools/>
      </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
  );
}
