import { Box, Text, Button, Flex, flexbox } from "@chakra-ui/react";
import Image from "next/image";

import jeweImg from "../../public/images/home-img/Jewe2.png";
import textureImg from "../../public/images/home-img/texture-3.png";
import texture5slImg from "../../public/images/home-img/texture-5sl.png";
import girlImg from "../../public/images/home-img/persionsliderhome4.png";
import pattern8Img from "../../public/images/home-img/partten-8.png";
import texture6Img from "../../public/images/home-img/texture-6.png";

import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

export default function HeroSection() {
  return (
    <Box>
      <Box
        h={{ base: "70vh", md: "90vh" }}
        w="100%"
        bg={"#F5F5F5"}
        overflow={"hidden"}
      >
        <Box
          px={{ base: 0, md: 5 }}
          h={{ base: "100vh", md: "100vh" }}
          w={"full"}
          display={"flex"}
        >
          {/* Box-1 */}
          <Box
            h={{ base: "70vh", md: "90%" }}
            w={{ base: "100%", md: "50%" }}
            bg={"#F5F5F5"}
          >
            {/* box-1-1 */}
            <Box h={{ base: "25%", md: "30%" }} w={"100%"} display={"flex"}>
              <Box w={"50%"} h={"100%"}>
                <Box
                  h={"100%"}
                  w={"40%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={{ base: "12vw", md: "3.5vw" }}
                >
                  <Image src={jeweImg} />
                </Box>
              </Box>
              <Box
                w={"8%"}
                h={"100%"}
                display={"flex"}
                alignItems={"end"}
                padding={"0 0 20px 25px"}
                width={{ base: "12vw", md: "3.5vw" }}
              >
                <Image src={jeweImg} />
              </Box>
              <Box
                w={"42%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"flex-end"}
                width={{ base: "40vw", md: "16vw" }}
              >
                <Image src={texture5slImg} style={{ height: "55%" }} />
              </Box>
            </Box>
            {/* box-1-2 */}
            <Box>
              {/* Upper Box with background text */}
              <Box
                position="relative"
                h="30%"
                w="100%"
                style={{
                  backgroundColor: "transparent", // Set background to transparent
                }}
              >
                <Text
                  className={DancingScript.className}
                  fontSize={{ base: "35vw", md: "19vw" }}
                  mt={{ base: 15, md: 18 }}
                  style={{
                    color: "#EBEBEB",
                    position: "absolute", // Make text absolute
                    top: "50%", // Position text vertically in the center
                    left: "50%", // Position text horizontally in the center
                    transform: "translate(-50%, -50%)", // Center text precisely
                    fontWeight: 100,
                  }}
                >
                  Beauty
                </Text>

                {/* Existing content with slight adjustments for layering */}
                <Box
                  textAlign={"center"}
                  h="100%" // Adjust height to fill remaining space
                  w="100%"
                  position="relative" // Make inner box relative for layering
                >
                  <Text
                    fontFamily={"Times new Roman"}
                    fontStyle={"italic"}
                    fontWeight={400}
                    fontSize={"50px"}
                    lineHeight={"64.39px"}
                    color={"#323232"}
                  >
                    Pink skin formula
                  </Text>
                  <Text
                    py={{ base: 1, md: 5 }}
                    fontFamily={"Poppins"}
                    fontWeight={300}
                    fontSize={"16px"}
                    textTransform={"uppercase"}
                    lineHeight={"30px"}
                    color={"#383838"}
                  >
                    True Natural - True Organic
                  </Text>
                  <Button
                    backgroundColor={"#252525"}
                    color={"white"}
                    border={"2px solid #252525"}
                    fontWeight={300}
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    borderRadius={"none"}
                    lineHeight={"30px"}
                    _hover={{ bg: "transparent", color: "black" }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* box-1-3 */}
            <Flex h={{ base: "50%", md: "40%" }} w="100%" position={"relative"}>
              {/* Left box with responsive image positioning */}
              <Box
                w={{ base: "70%", md: "45%" }}
                position="absolute"
                bottom={{ base: -2, md: 0 }}
              >
                <Image
                  src={textureImg}
                  alt="Texture Image"
                  width={{ base: "30vw", md: "20vw" }} // More responsive width
                />
              </Box>

              {/* Right box with centered image */}
              <Box
                w={{ base: "10%", md: "30%" }}
                display="flex"
                position={"absolute"}
                left={"70%"}
                alignItems="center"
                justifyContent="center" // Corrected to apply flexbox centering
                height="100%" // Ensure it fills the parent height for vertical alignment
              >
                <Image
                  src={jeweImg}
                  alt="Jewe Image"
                  maxW={{ base: "50%", md: "20%" }} // Responsive max width
                  m="auto" // Margin auto for auto-adjustment
                />
              </Box>
            </Flex>
          </Box>

          {/* Box-2 */}
          <Flex
            height={{ base: "70%", md: "90%" }}
            w={{ base: "100%", md: "50%" }}
            bg={"#F5F5F5"}
            display={{ base: "none", md: "flex" }}
          >
            <Box
              width={{ base: "100%", md: "70%" }}
              height={"100%"}
              bg={"#F5F5F5"}
            >
              <Flex direction="column" h="100%">
                <Box width="100%" height="25%" padding="75px 0 0 155px">
                  <Image
                    zIndex={-1}
                    src={pattern8Img}
                    style={{ height: "148px", width: "242px" }}
                    w={{ base: "600px", md: "242px" }}
                  />
                </Box>
                <Box
                  width={{ base: "100%", md: "100%" }}
                  height={{ base: "50%", md: "75%" }}
                  objectFit="cover"
                  display={{ base: "none", md: "block" }}
                  zIndex={99}
                >
                  <Image
                    src={girlImg}
                    zIndex={999}
                    style={{
                      height: "100%",
                      width: { base: "100%", md: "100%" },
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box
              width={{ base: "80%", md: "30%" }}
              height="100%"
              display="flex"
              alignItems="end"
              marginLeft={{ base: "0", md: "-30px" }}
            >
              <Box>
                <Image
                  src={texture6Img}
                  style={{ height: "80%", width: { base: "70%", md: "80%" } }}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
