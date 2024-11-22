import React from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
interface CardwithoutDesProps {
  title: string;
  contents: string[];
}

const CardwithoutDes: React.FC<CardwithoutDesProps> = ( props ) => {
  const listItems = props.contents.map((content, index) => (
    <Box key={index} borderWidth="1px" p="2" borderColor='teal' rounded='md' shadow='md'>
      {content}
    </Box>
  ));
  return (
    <>
      <Center h="100%"  mt='4%' mb='1%'>
        <Heading size="3xl">{ props.title }</Heading>
      </Center>
      <Flex justify="center" gap="4">
        { listItems }
      </Flex>
    </>
  );
}

export default CardwithoutDes;
