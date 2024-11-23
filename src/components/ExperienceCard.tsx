import React from "react";
import { Image, Badge, Text, Flex } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import { ExperienceData } from "../constants/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";


const ExperienceCard: React.FC = () => {
  const listItems = ExperienceData.map((data, index) => (
    <Flex borderWidth='1px' key={index} shadow='md' p='2' direction='column'>
      <Image src={data.imgsrc} bg='blue.950' aspectRatio={16/9}/>
      <Flex direction='column' mt='1'>
        <Badge variant="solid" colorPalette= 'teal'>
          { data.category }
        </Badge>

        <Text lineClamp='1' fontWeight="semibold">
          { data.title }
        </Text>
      </Flex>

      <Text>
        { data.description }
      </Text>

      <Flex align='center' gap='1' justify='space-between' mt='auto'>
        <SlCalender />
        <Text color="fg.muted" marginEnd='auto'>
          { data.date }
        </Text>
        <IconContext.Provider value={{color: '#ccc'}}>
          <a href={data.src}>
            <FaExternalLinkAlt/>
          </a>
        </IconContext.Provider>
      </Flex>
    </Flex>

  ));
  return (
    <>
      {listItems}
    </>
  );
}

export default ExperienceCard;
