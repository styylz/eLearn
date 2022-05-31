import { Box, Navbar } from "components";
import React from "react";
import { Hero } from "./sections";

const Landing: React.FC = () => {
  return (
    <Box position="relative">
      <Navbar />
      <Hero />
    </Box>
  );
};

export default Landing;
