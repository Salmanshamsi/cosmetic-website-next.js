import { Box, Text, Button, Flex, flexbox } from "@chakra-ui/react";
import Image from "next/image";
import jeweImg from "../../public/images/home-img/Jewe2.png";
import textureImg from "../../public/images/home-img/texture-3.png";
import texture5slImg from "../../public/images/home-img/texture-5sl.png";
import texture_2 from "../../public/images/home-img/texture-6.png";
import lipistic_img from "../../public/images/about-img/lipistic.png"
 

import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const AboutHeroSec = ({heading,text}) => {

  return (
    <Box>
      <Box h={{ base: "85vh", md: "100vh" }} w="100%" bg={"#F5F5F5"}>
        <Box
          px={{ base: 0, md: 5 }}
          h={{ base: "100vh", md: "100vh" }}
          w={"full"}
          display={"flex"}
        >
          {/* Box-1 */}
          <Box
            h={{ base: "70vh", md: "85%" }}
            w={{ base: "100%", md: "100%" }}
            bg={"#F5F5F5"}
          >
            {/* box-1-1 */}
            <Box h={{ base: "35%", md: "40%" }} w={"100%"} display={"flex"}>
              <Box w={"20%"} h={"100%"}>
                <Box
                  h={"100%"}
                  w={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={{ base: "12vw", md: "3.5vw" }}
                >
                  <Image src={jeweImg} />
                </Box>
              </Box>
              <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                alignItems={"end"}
                // padding={"0 0 20px 25px"}
                width={{ base: "12vw", md: "3.5vw" }}
              >
                <Image src={jeweImg} />
              </Box>
              <Flex
              w={"full"}
              justifyContent={'space-between'}
              >
              <Box
                w={"100%"}
                h={"100%"}
                display={'flex'}
                justifyContent={'start'}
                width={{ base: "40vw", md: "16vw" }}
              >
                <Image src={texture5slImg} style={{ height: "55%" }} />
              </Box>
              <Box
                w={"100%"}
                h={"100%"}
                display={'flex'}
                justifyContent={'end'}
                width={{ base: "40vw", md: "16vw" }}
              >
                <Image src={lipistic_img} style={{ height: "70%" }} />
              </Box>
              </Flex>
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
                    position: "absolute",
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
                    fontSize={{base:"40px", md:"50px"}}
                    lineHeight={"64.39px"}
                    color={"#323232"}
                  >
                    {heading}
                  </Text>
                  <Text
                    py={{ base: 1, md: 5 }}
                    fontFamily={"Poppins"}
                    fontWeight={300}
                    fontSize={{base:"13px", md:"16px"}}
                    textTransform={"uppercase"}
                    lineHeight={"30px"}
                    color={"#383838"}
                  >
                    {text}
                  </Text>
                </Box>

              </Box>
            </Box>
            {/* box-1-3 */}
            <Flex h={{ base: "50%", md: "37%" }} w="100%" position={"relative"}>
              {/* Left box with responsive image positioning */}
              <Box
                w={{ base: "40%", md: "35%" }}
                position="absolute"
                bottom={{ base: 10, md: -10 }}
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
                left={"20%"}
                alignItems="center"
                justifyContent="center" // Corrected to apply flexbox centering
                height="50%" // Ensure it fills the parent height for vertical alignment
              >
                <Image
                  src={jeweImg}
                  alt="Jewe Image"
                  maxW={{ base: "30%", md: "20%" }} // Responsive max width
                  m="auto" // Margin auto for auto-adjustment
                />
              </Box>
              <Box
                w={{ base: "30%", md: "30%" }}
                display="flex"
                position={"absolute"}
                left={"70%"}
                alignItems="center"
                justifyContent="center" // Corrected to apply flexbox centering
                height="100%" // Ensure it fills the parent height for vertical alignment
              >
                <Image
                  src={texture_2}
                  alt="texture-t"
                  maxW={{ base: "50%", md: "20%" }} // Responsive max width
                  m="auto" // Margin auto for auto-adjustment
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutHeroSec;
