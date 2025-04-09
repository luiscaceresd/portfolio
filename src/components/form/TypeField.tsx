import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { FieldProps } from "./FieldProps";

type TypeFieldProps = Omit<FieldProps, 'error' | 'touched'>;

export const TypeField: React.FC<TypeFieldProps> = ({
  value,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor="type">Type of enquiry</FormLabel>
      <Select 
        id="type" 
        name="type"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="hireMe">Freelance project proposal</option>
        <option value="openSource">
          Open source consultancy session
        </option>
        <option value="other">Other</option>
      </Select>
    </FormControl>
  );
}; 