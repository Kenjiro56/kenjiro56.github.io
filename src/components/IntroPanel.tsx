import React from 'react';
import { Flex, Image, Heading, Text, Highlight } from '@chakra-ui/react';
import profile_img from '../assets/drawn.jpeg';


const IntroPanel = () => {
  return (
    <Flex justify="center" align="center"  mt='4%' mb='1%'>
      <div>
        <Heading size={["3xl","4xl","6xl"]}>
          <Highlight query='Kenjiro' styles={{ color: "blue.500" }}>
            Kenjiro Hirose
          </Highlight>
        </Heading>
        <Text fontSize={['xs','lg']}>岐阜出身。名古屋工業大学を卒業後、大阪大学大学院へ進学。2025年卒業。東京でセキュリティエンジニアしてます。</Text>
      </div>
      <Image
        src={profile_img}
        alt="Kenjiro Hirose"
        borderRadius="full"
        width="30%"
        ml='2%'
        shadow='md'
      />
    </Flex>
  );
}

export default IntroPanel;
