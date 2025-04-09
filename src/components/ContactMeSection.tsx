import React, { useEffect } from "react";
import { useFormik, FormikErrors, FormikTouched } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

interface FormValues {
  firstName: string;
  email: string;
  type: string;
  comment: string;
  [key: string]: string;
}

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");
  const buttonColor = useColorModeValue("light.buttonColor", "dark.buttonColor");

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().required("Required"),
    }),
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
    <FullScreenSection
      isDarkBackground
      backgroundColor={backgroundColor}
      color={fontColor}
      py={{ base: 4, md: 16 }} // Less padding on the top and bottom on mobile
      spacing={8}
      display="flex" // Makes FullScreenSection a flex container
      flexDirection="column" // Stacks children vertically
      justifyContent="center" // Centers children vertically
      alignItems="center" // Centers children horizontally
      minHeight={{ base: "80vh", md: "10vh" }}
      minWidth={{ base: "95vw", md: "10vw" }}
    >
      <VStack
        w={{ base: "100%", md: "1024px" }}
        py={{ base: 8, md: 32 }}
        alignItems="center"
      >
        <Heading as="h1" id="contactme-section" size={{ base: "lg", md: "lg" }}>
          Contact me
        </Heading>
        <Box py={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={Boolean(formik.errors.firstName && formik.touched.firstName)}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={Boolean(formik.errors.email && formik.touched.email)}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={Boolean(formik.errors.comment && formik.touched.comment)}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={{ base: 150, md: 250 }} // Adjusted height for responsiveness
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                backgroundColor={buttonColor}
                color={backgroundColor}
                width="full"
                isLoading={isLoading}
                fontSize={{ base: "md", md: "lg" }} // Adjusted font size for responsiveness
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
