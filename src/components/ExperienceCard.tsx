import React from "react";
import { Image, HStack, Badge, Text, Box } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import { ExperienceData } from "../constants/data";


const ExperienceCard: React.FC = () => {
  const listItems = ExperienceData.map((data, index) => (
    <Box borderWidth='1px' key={index}>
      <Image src={data.imgsrc}/>
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
        <Text>
          { data.title }
        </Text>
      </HStack>
      <Text>
        { data.description }
      </Text>
      <HStack>
        <SlCalender />
        <Text color="fg.muted">
          { data.date }
        </Text>
      </HStack>
    </Box>

  ));
  return (
    <>
      {listItems}
    </>
  );
}

export default ExperienceCard;
