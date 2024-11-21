import {Box, Flex, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import { CertificationText } from '../constants/data';
import CardwithoutDes from './CardwithoutDes';

const CertificationPanel = () => {
  return(
    <>
      <CardwithoutDes title={'Certification'} contents={ CertificationText }/>
    </>
  );
}

export default CertificationPanel;
