import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing='12px'
      bg='white'
      color='black'
      align='justify'
      borderRadius='md'
      cursor='pointer'
    >
      <Image src={imageSrc.substring(1)} alt={title} borderRadius='md' margin='0px'/> 
      <Heading as='h4' size='md' margin='0 12px 0 12px'>{title}</Heading>
      <Text color='#808080' fontSize='md' margin='0 12px 0 12px'>{description}</Text>
      <HStack spacing='8px' margin='0 12px 12px 12px'>
          <Text fontSize='sm'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="x"></FontAwesomeIcon>
      </HStack>
    </VStack>
  );
};

export default Card;
