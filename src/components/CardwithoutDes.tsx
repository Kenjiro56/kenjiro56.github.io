import React from "react";
import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
interface CardwithoutDesProps {
  title: string;
  contents: string[];
}

const CardwithoutDes: React.FC<CardwithoutDesProps> = ( props ) => {
  const listItems = props.contents.map((content, index) => (
    <Box key={index} borderWidth="1px" p="2" borderColor='teal' rounded='md' shadow='md'>
      <Center>
        {content}
      </Center>
    </Box>
  ));
  return (
    <>
      <Center h="100%"  mt='4%' mb='1%'>
        <Heading size="3xl" textDecoration='underline'>{ props.title }</Heading>
      </Center>
      <SimpleGrid columns={[1, 4, 7]} gap="4">
        { listItems }
      </SimpleGrid>
    </>
  );
}

export default CardwithoutDes;
