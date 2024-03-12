"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

import glitz from "../../public/images/home-img/glitz.png";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const BestProduct = () => {
  return (
    <>
      <Flex
        bg={"white"}
        h={{ base: "auto", md: "80vh" }}
        w="100%"
        px={{ base: 2, md: 10 }}
        flexWrap="wrap"
        mt={{ base: "-15%", md: 0 }}
      >
        {/* Box 1 */}
        <Box
          h={{ base: "50%", md: "100%" }}
          w={{ base: "100%", md: "50%" }}
          px={{ base: 5, md: 20 }}
        >
          <Box h="100%" display="flex" justifyContent="center" flexDir="column">
            <Text
              fontSize={{ base: "32px", md: "32px" }}
              color={"#BFBFBF"}
              className={DancingScript.className}
            >
              Best Product
            </Text>
            <Text
              fontFamily={"Times New Roman"}
              fontStyle={"italic"}
              fontSize={{ base: "20px", md: "34px" }}
              mt={{ base: -3, md: -13 }}
            >
              Revolutionizing eye shadow.
            </Text>
            <Text
              my={{ base: 3, md: 6 }}
              fontFamily={"Poppins"}
              color={"#252525"}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Embracing a new era in cosmetics
            </Text>

            <Box borderLeft={"2px solid #C75D68"}>
              <Text pl={4} fontFamily={"Poppins"} color={"#7A7A7A"}>
                The eye shadow revolution redefines beauty with vibrant colors
                and innovative formulas, empowering self-expression and
                creativity in every stroke.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          h={{ base: "50%", md: "100%" }}
          w={{ base: "100%", md: "50%" }}
          position="relative"
        >
          {/* Text Box */}
          <Box
            position="absolute"
            top="10%"
            left="15%"
            transform="translate(-50%, -50%)"
            zIndex={99}
            pt={10}
          >
            <Text
              fontSize={{ base: "17vw", md: "10vw" }}
              color="#C75D68"
              className={DancingScript.className}
              mt={{ base: 10, md: 20 }}
              ml={{ base: 10, md: 60 }}
            >
              Color
            </Text>
          </Box>

          {/* Image Box */}
          <Box
            mt={{ base: "15%", md: "16%" }}
            ml={{ base: "14%", md: "25%" }}
            h={{ base: "250px", md: "400px" }}
            w={{ base: "270px", md: "400px" }}
          >
            <Image
              src={glitz}
              style={{ height: "100%", width: "100%", zIndex: "-2" }}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default BestProduct;
