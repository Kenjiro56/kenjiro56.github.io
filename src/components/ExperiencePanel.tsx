import React from "react";
import { Center, Heading, Grid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";

const ExperiencePanel = () => {
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">Experience</Heading>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap="5">
        <ExperienceCard />
      </Grid>
    </>
  );
};

export default ExperiencePanel;
