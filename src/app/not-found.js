"use client";
import { Box, Text, Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

import jeweImg from "../../public/images/home-img/Jewe2.png";
import textureImg from "../../public/images/home-img/texture-3.png";
import texture5slImg from "../../public/images/home-img/texture-5sl.png";
import pattern8Img from "../../public/images/home-img/partten-8.png";
import texture6Img from "../../public/images/home-img/texture-6.png";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Box
      h={{ base: "65vh", md: "90vh" }}
      w="100%"
      bg={"#F5F5F5"}
      overflow={"hidden"}
      mb={{ base: -7, md: -10 }}
    >
      <Box h={{ base: "100vh", md: "90vh" }} w={"full"} display={"flex"}>
        {/* Box-1 */}
        <Box
          h={{ base: "70vh", md: "100%" }}
          w={{ base: "100%", md: "100%" }}
          bg={"#F5F5F5"}
        >
          {/* Box1 */}
          <Flex
            w={"100%"}
            h={{ base: "15vh", md: "25vh" }}
            position={"relative"}
          >
            <Box w={"30%"} h={"100%"} position={"absolute"} top={8} left={0}>
              <Image
                src={texture6Img}
                style={{ width: "60%", maxHeight: "100%" }}
              />
            </Box>
            <Box
              w={"25%"}
              h={"100%"}
              position={"absolute"}
              left={"30%"}
              top={"90%"}
            >
              <Image src={jeweImg} style={{ width: "17%" }} />
            </Box>
            <Box w={"25%"} h={"100%"} position={"absolute"} left={"50%"}>
              <Image src={texture5slImg} style={{ width: "90%" }} />
            </Box>
            <Box
              w={"25%"}
              h={"100%"}
              position={"absolute"}
              left={"80%"}
              top={"70%"}
            >
              <Image src={jeweImg} style={{ width: "20%" }} />
            </Box>
          </Flex>

          <Box w={"100%"} h={{ base: "25vh", md: "40vh" }}>
            <Box
              display={"flex"}
              flexDir={"column"}
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              h={"100%"}
            >
              <Heading color={"#323232"} fontSize={{ base: "14vw", md: "8vw" }}>
                404
              </Heading>
              <Box>
                <Text fontFamily={"Poppins"} textAlign={"center"}>
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted{" "}
                </Text>
              </Box>
              <Link href="/">
                <Button
                  _hover={{ textDecoration: "none" }}
                  borderRadius={0}
                  bg={"#252525"}
                  color={"white"}
                  px={{ base: 2, md: 4 }}
                  py={{ base: 2, md: 4 }}
                  letterSpacing={{ base: 0, md: 2 }}
                  onClick={handleClick}
                >
                  BACK TO HOME
                </Button>
              </Link>
            </Box>
          </Box>

          <Box w={"100%"} h={"25vh"}>
            <Flex w={"100%"} h={"25vh"} position={"relative"}>
              <Box
                w={{ base: "40%", md: "25%" }}
                h={{ base: "40%", md: "100%" }}
                position={"absolute"}
                top={{ base: "", md: 0 }}
                left={{ base: -2, md: -4 }}
                bottom={{ base: 0, md: "" }}
              >
                <Image
                  src={pattern8Img}
                  style={{ width: "60%", maxHeight: "100%" }}
                />
              </Box>
              <Box
                w={"25%"}
                h={"100%"}
                position={"absolute"}
                left={"40%"}
                top={"50%"}
              >
                <Image src={jeweImg} style={{ width: "20%" }} />
              </Box>
              <Box
                w={{ base: "40%", md: "25%" }}
                h={{ base: "40%", md: "100%" }}
                position={"absolute"}
                right={0}
                bottom={0}
              >
                <Image src={textureImg} style={{ width: "90%" }} />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
