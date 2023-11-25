import React from 'react';
import { useColorMode, Switch, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Define icon sizes for different breakpoints
  const iconSize = useBreakpointValue({ base: '6', md: '8', lg: '10' }); // Adjust these values as needed

  return (
    <Switch
      id="color-mode-switch"
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Sun Icon */}
      {colorMode === 'light' && (
        <Icon as={FaSun} color="current" boxSize={iconSize} />
      )}

      {/* Moon Icon */}
      {colorMode === 'dark' && (
        <Icon as={FaMoon} color="current" boxSize={iconSize} />
      )}
    </Switch>
  );
};

export default ColorModeSwitcher;
