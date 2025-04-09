import React from 'react';
import { useColorMode, Switch, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './theme-provider';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setTheme } = useTheme();

  // Define icon sizes for different breakpoints
  const iconSize = useBreakpointValue({ base: '6', md: '6', lg: '8' }); // Adjust these values as needed

  const handleToggle = () => {
    // Toggle Chakra UI color mode
    toggleColorMode();
    
    // Also update shadcn theme
    setTheme(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch
      id="color-mode-switch"
      isChecked={colorMode === 'dark'}
      onChange={handleToggle}
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
