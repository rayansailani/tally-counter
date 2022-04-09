import React from "react";
import { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  const [count, setCount] = useState(
    Number(localStorage.getItem("countValue")) === 0
      ? 0
      : Number(localStorage.getItem("countValue"))
  );
  const incrementCount = () => {
    localStorage.setItem("countValue", count + 1);
    setCount(Number(localStorage.getItem("countValue")));
  };
  const resetCount = () => {
    localStorage.setItem("countValue", 0);
    setCount(0);
  };
  const decrementCount = () => {
    localStorage.setItem("countValue", count > 0 ? count - 1 : 0);
    setCount(Number(localStorage.getItem("countValue")));
  };
  return (
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
        {Number(localStorage.getItem("countValue"))}
      </Typography>
      {/* <Box
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
  </Box> */}
      <Button
        variant="contained"
        sx={{ width: "60vw", height: "40vh" }}
        onClick={incrementCount}
      >
        <AddIcon sx={{ fontSize: "6rem" }} />
      </Button>
      <Box
        display="flex"
        justifyContent="space-between"
        width="50vw"
        alignItems="center"
        marginBottom="1rem"
      >
        <Button
          size="large"
          onClick={resetCount}
          variant="contained"
          sx={{ height: "3rem", margin: "3rem 0 !important" }}
        >
          Reset
        </Button>
        <IconButton size="large" onClick={decrementCount}>
          <RemoveIcon sx={{ fontSize: "6rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Counter;
