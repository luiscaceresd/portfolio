import { Heading, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, href }) => {
  return (
    <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
      <VStack
        spacing="0"
        align="justify"
        borderRadius="md"
        borderWidth="1px"
        borderColor="currentColor"
        cursor="pointer"
        className="shadow-lg dark:shadow-orange-500/30 shadow-blue-500/30 transition-all duration-200 
                   text-slate-800 dark:text-slate-200 hover:scale-102 hover:opacity-100"
      >
        <Box textAlign="center" borderBottom="1px" borderColor="#DEE8EC" 
             className="bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 
                      dark:bg-gradient-to-br dark:from-blue-900/20 dark:via-purple-900/20 dark:to-teal-900/20">
          <Image
            src={imageSrc.substring(1)}
            alt={title}
            borderRadius="md"
            margin="0px"
            width="320px"
            height="243px"
          />
        </Box>
        <VStack
          spacing="12px"
          paddingBottom={{ base: "12px", md: "12px" }}
          paddingTop={{ base: "12px", md: "12px" }}
          align="justify"
          borderBottomRadius="md"
          className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
        >
          <Heading
            as="h4"
            size="md"
            margin="0 12px 0 12px"
            className="text-slate-800 dark:text-blue-100 transition-colors duration-300 
                     hover:text-blue-600 dark:hover:text-blue-400"
          >
            {title}
          </Heading>
          <Text fontSize="md" margin="0 12px 0 12px">
            {description}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
};

export default Card;