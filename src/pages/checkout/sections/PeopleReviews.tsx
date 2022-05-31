import { CardSwiper, Container, SectionWrapper, Typography } from "components";
import { SwiperSlide } from "swiper/react";
import React from "react";
import { PersonCard } from "../elements";
import { REVIEWS } from "constants/constants";

export const PeopleReviews: React.FC = () => (
  <SectionWrapper>
    <Container>
      <Typography type="h2" textAlign="center">
        See what people talk
      </Typography>
      <CardSwiper>
        {REVIEWS.map(
          ({ id, name, age, description, image, location, rating }) => (
            <SwiperSlide>
              <PersonCard
                key={id}
                name={name}
                age={age}
                description={description}
                image={image}
                location={location}
                rating={rating}
              />
            </SwiperSlide>
          )
        )}
      </CardSwiper>
    </Container>
  </SectionWrapper>
);
