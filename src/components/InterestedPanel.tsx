import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

const InterestedPanel = () => {
  return (
    <>
      <h2>Interested</h2>
      <div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Machine Learning</p>
        </div>
        <div>
          <p>Blockchain</p>
        </div>
      </div>


      <Center h="100%">
        <Heading size="3xl">Interested</Heading>
      </Center>
      <Flex justify="center" gap="4">
        <Box borderWidth="2px" p="2">学士(工学)</Box>
        <Box borderWidth="2px" p="2">基本情報技術者</Box>
      </Flex>
    </>
  );
};
export default InterestedPanel;
