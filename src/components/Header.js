import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: luisdeveloper97@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/luiscaceresd",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/luiscaceresd/",
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const hoverStyle = {
    textDecoration: "none",
    color: "teal.300",
    transform: "scale(1.05)", // Scale up the link slightly on hover
    transition: "all 0.3s ease-in-out",
    whiteSpace: "nowrap" // Prevent wrapping of text
  };
   // Use breakpoint values to adjust icon and text sizes for different screen sizes
   const iconSize = useBreakpointValue({ base: 'xl', md: 'xl', lg: '2xl' }); // Adjust icon sizes
   const fontSize = useBreakpointValue({ base: 'md', md: 'xl', lg: '2xl' }); // Adjust font sizes for text
   const switchSize = useBreakpointValue({ base: 'md', md: 'xl', lg: '2xl' }); // Adjust switch sizes

   // Access the current theme colors for background
   const backgroundColor = useColorModeValue("light.background", "dark.background");
   const fontColor = useColorModeValue("light.text", "dark.text");
   const borderColor = useColorModeValue("light.border", "dark.border");

   return (
     <Box
       position="fixed"
       top={0}
       left={0}
       right={0}
       backgroundColor={backgroundColor} // Use theme color
       zIndex={1}
       borderBottom="1px"
       borderBottomColor={borderColor}
     >
       <Box
         color={fontColor} // Use theme color
         maxWidth={{ base: "100%", md: "95%" }}
         width="full"
         margin="0 auto"
         paddingX={{ base: 4, md: 10 }}
         paddingY={{ base: 3, md: 6 }}
       >
         <HStack
           justifyContent="space-between"
           alignItems="center"
           spacing={{ base: 3, md: 6 }}
         >
           <nav>
             <HStack spacing={{ base: 3, md: 6 }}>
               {socials.map(({ icon, url }) => (
                 <Link key={url} href={url} isExternal p={{ base: 1, md: 2 }}>
                   <FontAwesomeIcon icon={icon} size={iconSize} />
                 </Link>
               ))}
             </HStack>
           </nav>

           <HStack spacing={{ base: 3, md: 6 }}>
             <nav>
               <HStack spacing={{ base: 3, md: 6 }}>
                 <Text as={Link} href="#projects" onClick={handleClick('projects')} fontSize={fontSize}>
                   Projects
                 </Text>
                 <Text as={Link} href="#contact-me" onClick={handleClick('contactme')} fontSize={fontSize}>
                   Contact&nbsp;Me
                 </Text>
               </HStack>
             </nav>
             {/* Wrap ColorModeSwitcher to pass size prop */}
             <Box fontSize={switchSize}>
               <ColorModeSwitcher />
             </Box>
           </HStack>
         </HStack>
       </Box>
     </Box>
   );
 };

export default Header;