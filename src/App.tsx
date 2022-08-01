import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/globalStyle";
import colors from "./styles/colors";
import { FilesProvider } from "./context/filesContext";

const theme = {
  colors,
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FilesProvider>
          <AppRoutes />
        </FilesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
