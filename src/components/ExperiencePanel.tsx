import React from "react";
import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";

const ExperiencePanel = () => {
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">Experience</Heading>
      </Center>
      <SimpleGrid columns={[1, 2, 4]} gap="5">
        <ExperienceCard />
      </SimpleGrid>
    </>
  );
};

export default ExperiencePanel;
