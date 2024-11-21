import React from "react";
import { Image, HStack, Badge, Text, Icon, GridItem } from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import { ExperienceData } from "../constants/data";


const ExperienceCard: React.FC = () => {
  const listItems = ExperienceData.map((data, index) => (
    <GridItem borderWidth='1px'>
      <Image src={data.imgsrc}/>
      <HStack>
        <Badge colorPalette="teal" variant="solid">
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
        <Icon>
            <SlCalender />
        </Icon>
        <Text color="fg.muted">
          { data.date }
        </Text>
      </HStack>

    </GridItem>

  ));

  return (
    <>
      {listItems}
    </>
  );
}

export default ExperienceCard;
