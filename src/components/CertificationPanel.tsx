import {Box, Flex, Center, Heading } from '@chakra-ui/react';
import React from 'react';

const CertificationPanel = () => {
  return(
    <>
      <Center h="100%">
        <Heading size="3xl">Certification</Heading>
      </Center>
      <Flex justify="center" gap="4">
        <Box borderWidth="2px" p="2">学士(工学)</Box>
        <Box borderWidth="2px" p="2">基本情報技術者</Box>
      </Flex>
    </>
  );
}

export default CertificationPanel;
