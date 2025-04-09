import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit, { SubmitData } from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { 
  NameField, 
  EmailField, 
  TypeField, 
  CommentField 
} from "./form";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  comment: Yup.string().required("Required"),
});

function ContactForm() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const buttonColor = useColorModeValue("light.buttonColor", "dark.buttonColor");

  const formik = useFormik<SubmitData>({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
    },
    validationSchema,
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <NameField 
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
        />
        
        <EmailField 
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        
        <TypeField 
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        
        <CommentField 
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.comment}
          touched={formik.touched.comment}
        />
        
        <Button
          type="submit"
          backgroundColor={buttonColor}
          color={backgroundColor}
          width="full"
          isLoading={isLoading}
          fontSize={{ base: "md", md: "lg" }}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}

export default ContactForm; 