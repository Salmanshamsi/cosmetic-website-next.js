import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import logo1 from "../../public/images/home-img/Logo1.png";
import logo2 from "../../public/images/home-img/Logo2.png";
import logo3 from "../../public/images/home-img/Logo3.png";
import logo4 from "../../public/images/home-img/Logo4.png";
import logo5 from "../../public/images/home-img/logo5.png";
import RectangleLogo from "../../public/images/about-img/banner.png";

const Banner = () => {
  return (
    <Box
      h={{ base: "auto", md: "35vh" }}
      w="100%"
      position="relative"
      flexWrap="wrap"
      gap={5}
    >
      {/* Logos */}
      <Box
        h={"100%"}
        px={{ base: 2, md: 20 }}
        w={"100%"}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        flexWrap={"wrap"}
        gap={{ base: 5, md: 0 }}
      >
        <Box
          h={{ base: "auto", md: "15vh" }}
          w={{ base: "25%", md: "17%" }}
          mb={{ base: 4, md: 0 }}
          py={{ base: 4, md: 2 }}
        >
          <Image src={logo1} />
        </Box>
        <Box
          h={{ base: "auto", md: "15vh" }}
          w={{ base: "25%", md: "17%" }}
          mb={{ base: 4, md: 0 }}
          py={{ base: 4, md: 2 }}
        >
          <Image src={logo2} />
        </Box>
        <Box
          h={{ base: "auto", md: "15vh" }}
          w={{ base: "25%", md: "17%" }}
          mb={{ base: 4, md: 0 }}
          py={{ base: 4, md: 2 }}
        >
          <Image src={logo3} />
        </Box>
        <Box
          h={{ base: "auto", md: "15vh" }}
          w={{ base: "25%", md: "17%" }}
          mb={{ base: 4, md: 0 }}
          py={{ base: 4, md: 2 }}
        >
          <Image src={logo4} />
        </Box>
        <Box
          h={{ base: "auto", md: "15vh" }}
          w={{ base: "25%", md: "17%" }}
          py={{ base: 4, md: 2 }}
        >
          <Image src={logo5} />
        </Box>
      </Box>

      {/* Background Image */}
      <Box
        h={{ base: "37vh", md: "auto" }} // Adjusted height for small screens
        w={"100%"}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        bg={"gray.200"}
      >
        <Image src={RectangleLogo} objectFit="cover" />
      </Box>
    </Box>
  );
};

export default Banner;