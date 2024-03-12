import React from "react";
import { Box, Text } from "@chakra-ui/react";
import texture3 from "../../public/images/home-img/texture-3.png";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const OurGallery = () => {
  return (
    <Box
      height={{ base: "50vh", md: "40vh" }}
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {/* Left Content */}
      <Box
        pos="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        flexDir="column"
        gap={2}
        textAlign="center"
        pl={{ base: 2, md: 3 }}
        pr={{ base: 2, md: 3 }}
      >
        <Text
          className={DancingScript.className}
          fontSize={{ base: "2xl", md: "4xl" }}
          color={"#BFBFBF"}
        >
          Our Gallery
        </Text>
        <Text
          fontFamily="Times New Roman"
          fontSize={{ base: "sm", md: "md" }}
          fontStyle={"italic"}
        >
          Welcome to our beauty community
        </Text>

        <Box borderLeft={{ base: "none", md: "4px solid #C75D68" }} pl={3}>
          <Text
            fontStyle="italic"
            fontSize={{ base: "xs", md: "sm" }}
            color={"#BFBFBF"}
          >
            Follow us on Instagram
          </Text>
          <Text fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
            @EtherealElegance
          </Text>
        </Box>
      </Box>

      {/* Right Content */}
      <Box
        pos="absolute"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        h={{ base: "40%", md: "60%" }}
        w={{ base: "60%", md: "35%" }}
        marginLeft={{ base: "70%", md: "80%" }}
        bottom={{ base: "55%", md: "65%" }}
      >
        <Image
          src={texture3}
          alt="Texture Image"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
    </Box>
  );
};

export default OurGallery;
