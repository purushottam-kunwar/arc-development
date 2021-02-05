import React from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      WSS !
    </ThemeProvider>
  );
}

export default App;
