import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import jeweImg from "../../public/images/home-img/Jewe2.png";
import Image from "next/image";

import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});
const ContactUsComp = () => {
  const contactInfo = [
    {
      title: "Phone & Email",
      content: "+ (123) 1800-8979-9897",
      details: "Eleg@gmail.com",
    },
    {
      title: "Address",
      content: "New YorkA USA",
      details: "1039 First Avenue, Muswell hill",
    },
    {
      title: "Opening Timings",
      content: "Mon - Fri 10:00 - 19:00",
      details: "Closed on Weekends",
    },
  ];

  return (
    <Box
      h={{ base: "45vh", md: "52vh" }}
      w="100%"
      bg="white"
      position="relative"
    >
      <Box h="50vh" w="100%" zIndex={-99} position="absolute"></Box>
      <Box
        h="45vh"
        w={{ base: "95%", md: "80%" }}
        bg={"white"}
        border={"none"}
        position="absolute"
        top={{ base: "-35%", md: "-20%", lg: "-30%" }} // Example of responsive top positioning
        left="50%"
        transform="translateX(-50%)"
        zIndex={99}
        boxShadow={"md"}
      >
        <Flex h="30%">
          <Box w="25%" h="100%" display="flex" justifyContent="end">
            <Box
              width={{ base: "40px", md: "60px" }}
              h={{ base: "40px", md: "60px" }}
              pt={{ base: 4, md: 2 }}
            >
              <Image src={jeweImg} />
            </Box>
          </Box>
          <Flex
            w="50%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Text
              color="#BFBFBF"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }}
              textAlign={"center"}
              className={DancingScript.className}
            >
              Contact us
            </Text>
            <Text
              fontWeight="800"
              fontSize={{ base: "20px", md: "25px", lg: "30px" }} // Responsive font size
              fontStyle="italic"
              fontFamily="Times New Roman"
              textAlign={"center"}
            >
              Feel Free to Contact Us
            </Text>
          </Flex>
          <Box w="25%" h="100%"></Box>
        </Flex>
        <Flex h="50%" justifyContent="space-around">
          {contactInfo.map((elem, i) => (
            <Box
              h="100%"
              w="33%"
              display="flex"
              flexDir="column"
              gap={2}
              justifyContent="center"
              alignItems="center"
              key={i}
            >
              <Text
                fontFamily="Times New Roman"
                fontStyle="italic"
                fontWeight="800"
                textAlign={"center"}
                fontSize={{ base: "16px", md: "20px" }} // Responsive font size
              >
                {elem.title}
              </Text>
              <Text
                fontFamily="Poppins"
                color="#8F8F8F"
                textAlign={"center"}
                fontSize={{ base: "11px", md: "14px" }} // Responsive font size
              >
                {elem.content}
              </Text>
              <Text
                fontFamily="Poppins"
                color="#8F8F8F"
                textAlign={"center"}
                fontSize={{ base: "11px", md: "14px" }} // Responsive font size
              >
                {elem.details}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box h="20%" pos="relative">
          <Box width="25px" h="25px" pos="absolute" top={1} left={8}>
            <Image src={jeweImg} />
          </Box>
        </Box>
      </Box>

      <Box
        position={"absolute"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        top={{ base: "59%", md: "46%" }}
      >
        <Text
          color="#BFBFBF"
          className={DancingScript.className}
          fontSize={{ base: "5vw", md: "3vw" }}
          mt={{ base: 1, md: 0 }}
        >
          Eletheral Elegance Contact"
        </Text>
        <Text
          fontFamily={"Times New Roman"}
          fontStyle={"italic"}
          fontWeight={800}
          fontSize={{ base: "4.2vw", md: "2vw" }}
        >
          Explore Our Range Of Leading Brand Products
        </Text>
      </Box>
    </Box>
  );
};

export default ContactUsComp;
