import { Box, Navbar } from "components";
import React from "react";
import { CoursesBenefits, Hero } from "./sections";

const Landing: React.FC = () => {
  return (
    <Box position="relative">
      <Navbar />
      <Hero />
      <CoursesBenefits />
    </Box>
  );
};

export default Landing;
