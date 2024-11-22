import React from "react";
import { Image, HStack, Badge, Text, Box, Flex } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import { ExperienceData } from "../constants/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";


const ExperienceCard: React.FC = () => {
  const listItems = ExperienceData.map((data, index) => (
    <Box borderWidth='1px' key={index} shadow='md' p='2'>
      <Image src={data.imgsrc} bg='blue.950' aspectRatio={16/9}/>
      <HStack>
        <Badge variant="solid"
        colorPalette= 'teal'
        // {`
        //   ${
        //     data.category === 'Internship' ? 'teal' :
        //     data.category === 'Workshop' ? 'blue' :
        //     data.category === 'Club' ? 'purple' :
        //     data.category === 'Hackathon' ? 'cyan' :
        //     'grey'
        //   }
        // `}
        >
          { data.category }
        </Badge>
        <Text lineClamp='1'>
          { data.title }
        </Text>
      </HStack>
      <Text>
        { data.description }
      </Text>
      <Flex align='center' gap='1' justify='space-between'>
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
    </Box>

  ));
  return (
    <>
      {listItems}
    </>
  );
}

export default ExperienceCard;
