import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldProps } from "./FieldProps";

export const EmailField: React.FC<FieldProps> = ({
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <FormControl
      isInvalid={Boolean(error && touched)}
    >
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input
        id="email"
        name="email"
        type="email"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}; 