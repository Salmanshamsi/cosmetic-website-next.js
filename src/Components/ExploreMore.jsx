"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import texture3 from "../../public/images/home-img/texture-3.png";
import Image from "next/image";

import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});
const ExploreMore = () => {
  return (
    <Flex height={{ base: "20vh", md: "30vh" }} w={"100%"} bg={"#F8F8F8"}>
      <Box h={"100%"} w={"30%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={{ base: 0, md: -7 }}>
          <Text
            className={DancingScript.className}
            fontSize={{ base: "10vw", md: "10vw" }}
            color={"#C75D68"}
          >
            Beauty
          </Text>
        </Box>
      </Box>
      <Box
        h={"100%"}
        w={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
      >
        <Text fontSize={{ base: 12, md: "auto" }} textAlign={"center"}>
          Dwell on the beauty of life. Watch the stars, and see yourself running
          with them.
        </Text>
        <Text fontSize={{ base: 10, md: "auto" }}>
          ― Marcus Aurelius, Meditations
        </Text>
        <Button
          border={"2px solid black"}
          bg={"transparent"}
          borderRadius={0}
          fontSize={{ base: 7, md: 10 }}
        >
          EXPLORE MORE
        </Button>
      </Box>
      <Box h={"100%"} w={"20%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={0}>
          <Image src={texture3} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ExploreMore;
