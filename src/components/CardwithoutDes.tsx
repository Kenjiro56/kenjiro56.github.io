import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
interface CardwithoutDesProps {
  title: string;
  contents: string[];
}

const CardwithoutDes: React.FC<CardwithoutDesProps> = ( props ) => {
  const listItems = props.contents.map((content, index) => (
    <Box key={index} borderWidth="2px" p="2">
      {content}
    </Box>
  ));
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">{ props.title }</Heading>
      </Center>
      <Flex justify="center" gap="4">
        { listItems }
      </Flex>
    </>
  );
}

export default CardwithoutDes;
