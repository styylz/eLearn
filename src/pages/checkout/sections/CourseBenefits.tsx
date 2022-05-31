import {
    Container,
    FlexWrapper,
    SectionWrapper,
    Typography,
    CourseInfoCard,
  } from "components";
  import React from "react";
  import { BENEFITS } from "constants/constants";

  export const CoursesBenefits: React.FC = () => (
    <SectionWrapper>
      <Container>
        <Typography type="h2" marginBottom="s32" textAlign="center">
          Numbers as facts
        </Typography>

        <FlexWrapper
          flexWrap="wrap"
          justifyContent={{ _: "center", ltablet: "space-around" }}
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
