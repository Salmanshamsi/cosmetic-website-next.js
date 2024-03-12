import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import emailImg from "../../public/images/home-img/Email.png";
import Image from "next/image";

const EmailUs = () => {
  return (
    <Flex
      h={{ base: "100%", md: "80vh" }}
      w="100%"
      bg="white"
      flexWrap={"wrap"}
      py={5}
    >
      <Box h={{ base: "90%", md: "100%" }} w={{ base: "100%", md: "45%" }}>
        <Image src={emailImg} objectFit="cover" style={{ height: "100%" }} />
      </Box>
      <Flex h="100%" w={{ base: "100%", md: "55%" }} flexDir="column" mt={10}>
        {/* Email information */}
        <Flex
          pr={{ base: 2, md: 40 }}
          pl={{ base: 2, md: 10 }}
          h={{ base: "25%", md: "auto" }}
          flexDir="column"
          justifyContent="center"
        >
          <Text
            fontFamily="Poppins"
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight={400}
          >
            Email Us
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: "10px", md: "12px" }}
            color={"#A5A5A5"}
            lineHeight={{ base: "16px", md: "30px" }}
            py={1}
          >
            Feel free to reach out to us anytime! We're here to assist you with
            any inquiries or concerns you may have.
          </Text>
        </Flex>

        {/* Contact form */}
        <Box
          as="form"
          pr={{ base: 2, md: 40 }}
          pl={{ base: 2, md: 10 }}
          h={{ base: "75%", md: "auto" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={{ base: 2, md: 5 }}
        >
          <VStack spacing={4} w="full">
            {/* Name and Email fields */}
            <Flex direction={{ base: "column", md: "row" }} w="full" gap={3}>
              <FormControl id="name" flex={1}>
                <Input
                  type="text"
                  placeholder="Name*"
                  isRequired
                  borderColor="black"
                  _focus={{ borderColor: "black" }}
                  borderRadius={0}
                />
              </FormControl>
              <FormControl id="email" flex={1}>
                <Input
                  type="email"
                  placeholder="Email*"
                  isRequired
                  borderColor="black"
                  _focus={{ borderColor: "black" }}
                  borderRadius={0}
                />
              </FormControl>
            </Flex>

            {/* Message field */}
            <FormControl id="message" w="full" h="100%">
              <Textarea
                placeholder="Write a Message."
                borderRadius={0}
                borderColor="black"
                rows={7}
                cols={50}
                size="lg"
                _focus={{ borderColor: "black" }}
              />
            </FormControl>

            {/* Submit button */}
            <Button
              type="submit"
              colorScheme="black"
              size="md"
              py={5}
              borderRadius={0}
              bg="black"
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default EmailUs;
