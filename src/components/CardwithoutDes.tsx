import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { CetificationData } from "../constants/data";

const CardwithoutDes: React.FC = () => {
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">{ }</Heading>
      </Center>
      <Flex justify="center" gap="4">
        <Box borderWidth="2px" p="2">学士(工学)</Box>
        <Box borderWidth="2px" p="2">基本情報技術者</Box>
      </Flex>
    </>
  );
}

export default CardwithoutDes;
