import {
  Container,
  CourseInfoCard,
  FlexWrapper,
  SectionWrapper,
} from "components";
import React from "react";
import { BENEFITS } from "../../../constants/constants";

export const CoursesBenefits: React.FC = () => (
  <SectionWrapper>
    <Container>
      <FlexWrapper
        justifyContent={{ _: "center", ltablet: "space-evenly" }}
        flexWrap="wrap"
        maxWidth="100%"
      >
        {BENEFITS.map(({ id, title, description, image }) => (
          <CourseInfoCard
            key={id}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </FlexWrapper>
    </Container>
  </SectionWrapper>
);
