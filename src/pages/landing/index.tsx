import { Box, Navbar } from "components";
import React from "react";
import { Courses, CoursesBenefits, Hero, JoinUs } from "./sections";

const Landing: React.FC = () => {
  return (
    <Box position="relative">
      <Navbar />
      <Hero />
      <CoursesBenefits />
      <JoinUs />
      <Courses />
    </Box>
  );
};

export default Landing;
