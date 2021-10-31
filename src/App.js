import React, { useState } from "react";
import { Box, Typography, Container, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./styles.css";
const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decrementCount = () => {
    if (count >= 1) setCount((prev) => prev - 1);
  };
  return (
    <Container maxWidth="xl" sx={{ background: "#44FFD1", minWidth: "100vw" }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h3" gutterBottom>
          Tally Counter
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ margin: "3rem 0 !important", fontWeight: "bold" }}
        >
          {count}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          width="50vw"
          alignItems="center"
          marginBottom="1rem"
        >
          <IconButton size="large" onClick={incrementCount}>
            <AddIcon sx={{ fontSize: "6rem" }} />
          </IconButton>
          <IconButton size="large" onClick={decrementCount}>
            <RemoveIcon sx={{ fontSize: "6rem" }} />
          </IconButton>
        </Box>
        <Button
          size="large"
          onClick={resetCount}
          variant="contained"
          sx={{ height: "3rem", margin: "3rem 0 !important" }}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};
export default App;
