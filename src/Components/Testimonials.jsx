"use client";
import { Box, Flex, Text, Heading,  } from "@chakra-ui/react";

import partten8 from "../../public/images/home-img/partten-8.png";
import surfacePinkImg from "../../public/images/home-img/surface-pink.png";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import HomeFootSlider from "./HomeFootSlider";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const Testimonials = () => {
  return (
    <>
      <Box
        h={{ base: "auto", md: "100vh" }}
        width={"100%"}
        display={"flex"}
        flexDir={"column"}
      >
        {/* Box 1 */}
        <Flex width={"100%"} h={"30%"}>
          <Flex
            h={"100%"}
            w={"85%"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text
              className={DancingScript.className}
              color={"#BFBFBF"}
              textAlign={"center"}
              fontSize={{ base: "6vw", md: "2vw" }}
            >
              Perfect Experience
            </Text>
            <Text
              color={"#252525"}
              fontSize={{ base: "6vw", md: "2vw" }}
              fontStyle={"italic"}
              textAlign={"center"}
            >
              Our Testimonials
            </Text>
          </Flex>
          <Box h={"100%"} w={"15%"}>
            <Image src={partten8} />
          </Box>
        </Flex>
        {/* Box 2 */}
        <Box width={"100%"} h={"20%"}>
          <Text
            className={DancingScript.className}
            color={"#C75D68"}
            fontSize={{ base: "18vw", md: "8vw" }}
            ml={{ base: -5, md: -8 }}
            opacity={0.8}
          >
            Testimonial
          </Text>
        </Box>
        {/* Box 3 */}
        <Box
          width="100%"
          minHeight={{ base: "63vh", md: "500px" }}
          position="relative"
        >
          <Box w="100%" h="100%">
            <Image src={surfacePinkImg} objectFit="cover" />
          </Box>
          <Box
            position="absolute"
            top="35%"
            left={{ base: "50%", md: "70%" }} // Center the white box horizontally on all devices
            transform="translate(-50%, -50%)" // Maintain vertical centering
            width={{ base: "80%", md: "350px" }} // Adjust base width for better spacing
            height={{ base: "210px", md: "260px" }} // Increase base height significantly while maintaining aspect ratio
            bg="white"
            p={3}
          >
            <Box position={"relative"}>
              <Box position={"absolute"} my={{ base: 3, md: 10 }} mx={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDir={"column"}
                >
                  <Heading textTransform={"uppercase"} fontSize={20}>
                    What are Client Say
                  </Heading>
                  <Text
                    color={"#7A7A7A"}
                    fontFamily={"Poppins"}
                    fontSize={12}
                    my={2}
                  >
                    I'm absolutely in love with EtherealElegance's skincare
                    products! They've completely transformed my skin, leaving it
                    radiant and glowing. Couldn't recommend them enough!
                  </Text>
                  <Heading fontSize={20}>- Sarah M</Heading>
                </Box>
              </Box>
              <Box position={"absolute"}>
                <Image src={message} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
