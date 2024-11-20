import React from 'react';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';
import profile_img from '../assets/drawn.jpeg';


const IntroPanel = () => {
  return (
<Flex justify="center" align="center">

        <div>
          <Heading size="6xl">Kenjiro Hirose</Heading>
          <Text>岐阜出身。名古屋工業大学大学を卒業後、大阪大学大学院へ進学。2025年卒業予定。</Text>
        </div>
        <Image
            src={profile_img}
            alt="Kenjiro Hirose"
            borderRadius="full"
            width="300px"
          />
        </Flex>
  );
}

export default IntroPanel;
