import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { FieldProps } from "./FieldProps";

export const CommentField: React.FC<FieldProps> = ({
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
      <FormLabel htmlFor="comment">Your message</FormLabel>
      <Textarea
        id="comment"
        name="comment"
        height={{ base: 150, md: 250 }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}; 