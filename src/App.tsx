import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { useTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
