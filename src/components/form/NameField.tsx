import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldProps } from "./FieldProps";

export const NameField: React.FC<FieldProps> = ({
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
      <FormLabel htmlFor="firstName">Name</FormLabel>
      <Input
        id="firstName"
        name="firstName"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}; 