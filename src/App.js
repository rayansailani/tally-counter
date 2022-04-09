import React from "react";
import { Container } from "@mui/material";
import Counter from "./counter";
import "./styles.css";
const App = () => {
  return (
    <Container maxWidth="xl" sx={{ background: "#44FFD1", minWidth: "100vw" }}>
      <Counter />
    </Container>
  );
};
export default App;
