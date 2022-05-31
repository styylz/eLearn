import { Box, Navbar } from "components";
import React from "react";
import { CoursesBenefits, Hero, JoinUs } from "./sections";

const Landing: React.FC = () => {
  return (
    <Box position="relative">
      <Navbar />
      <Hero />
      <CoursesBenefits />
      <JoinUs />
    </Box>
  );
};

export default Landing;
