"use client";
import AboutHeroSec from "@/Components/AboutHeroSec";
import {
  Container,
  Flex,
  VStack,
  Text,
  Heading,
  Box,
  Square,
} from "@chakra-ui/react";
import makupImg from "../../../public/images/about-img/makeup.png";
import leafImg from "../../../public/images/home-img/partten-8.png";
import BrowPowderImg from "../../../public/images/home-img/texture-3.png";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});
import React from "react";
import icon1 from "../../../public/images/about-img/icon1.png";
import icon2 from "../../../public/images/about-img/icon2.png";
import icon3 from "../../../public/images/about-img/icon3.png";
import { useState } from "react";
import TestimonialCard from "@/Components/TestimonialCard";
import Banner from "@/Components/Banner";
import image1 from "../../../public/images/about-img/test1.png";
import image2 from "../../../public/images/about-img/test2.png";
import image3 from "../../../public/images/about-img/test3.png";
import image4 from "../../../public/images/about-img/test4.png";
import FooterSLider from "@/Components/FooterSLider";
import Footer from "@/Components/Footer";
import FooterSlider from "@/Components/FooterSlider";

const About = () => {
  const [testimonial, setTestimonial] = useState([
    {
      image: image1,
      heading: "EMILY JOHNSON",
      text: "founder",
    },
    {
      image: image2,
      heading: "LIAM ANDERSON",
      text: "co founder",
    },
    {
      image: image3,
      heading: "ETHAN THOMPSON",
      text: "markiting director",
    },
    {
      image: image4,
      heading: "SOPHIA ROBERTS",
      text: "creative director",
    },
  ]);

  return (
    <div>
      <AboutHeroSec heading={"About us"} text={"True Natural - True Organic"} />

      <Container
        display={"flex"}
        flexDirection={"column"}
        gap={{ base: "15", md: "20" }}
        bg={"#F5F5F5"}
        maxWidth={"100%"}
        maxHeight={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"10"}
          p={"30px"}
          alignItems={"center"}
        >
          <Box
            h={"auto"}
            w={"auto"}
            spacing={3}
            alignItems={"center"}
            justifyContent={"start"}
            px={{ base: "0px", md: "10px" }}
          >
            <Text
              className={DancingScript.className}
              fontSize={{ base: "10px", md: "20px" }}
              w={"full"}
              textAlign={"start"}
              color={"gray"}
            >
              Our story
            </Text>
            <Heading
              fontSize={{ base: "lg", md: "xl" }}
              w={"full"}
              textAlign={"start"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "medium" }}
              fontWeight={"bold"}
              borderLeft={"4px"}
              borderColor={"red"}
              px={"30px"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos, veniam? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos, veniam?
            </Text>
            <Text fontSize={{ base: "small", md: "medium" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur voluptates accusamus optio accusantium saepe
              inventore? Consequatur mollitia fugiat culpa similique?
            </Text>
          </Box>

          <Box w={"full"} h={"50vh"} position={"relative"}>
            <Box
              border={"1px"}
              position={"absolute"}
              h={{ base: "30vh", md: "60vh" }}
              w={"100%"}
              zIndex={"5"}
            ></Box>

            <Box
              zIndex={"2"}
              position={"absolute"}
              right={"-2"}
              bottom={"-2"}
              h={"50vh"}
              w={"100%"}
            >
              <Image src={makupImg} />
            </Box>
          </Box>
        </Box>

        <Flex
          w={"100%"}
          h={"full"}
          // border={"1px"}
          borderColor={"purple"}
          position={"relative"}
        >
          <Box
            p="10px"
            // border="1px"
            w={"30%"}
            left={"-32"}
            bottom={"0"}
            position={"absolute"}
            display={{ base: "none", md: "inline" }}
            h={{ base: "", md: "" }}
            transformStyle="preserve-3d"
            transition="transform 0.5s"
            transform={"rotateY(180deg)"}
          >
            <Image
              maxW={{ base: "50%", md: "10%" }}
              m="auto"
              src={BrowPowderImg}
            />
          </Box>

          <Flex
            zIndex={"overlay"}
            h={"full"}
            w={"full"}
            p={{ base: "0", md: "10%" }}
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"center"}
            gap={"10"}
          >
            <Box
              borderBottom={"1px"}
              borderColor={"#E5E5E5"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={"1"}
              py={{ base: "5", md: "0" }}
              h={"full"}
              w={"full"}
            >
              <Box
                p={"10px"}
                bg={"#EFAFB6"}
                rounded={"full"}
                h={{ base: "10", md: "'16'" }}
                w={{ base: "10", md: "'16'" }}
              >
                <Image src={icon1} />
              </Box>
              <Heading
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight={"normal"}
              >
                10+
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>Your Experince</Text>
            </Box>

            <Box
              gap={"1"}
              py={{ base: "5", md: "0" }}
              borderBottom={"1px"}
              borderColor={"#E5E5E5"}
              mx={"30px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              h={"full"}
              w={"full"}
            >
              <Box
                p={"10px"}
                rounded={"full"}
                bg={"#EFAFB6"}
                h={{ base: "10", md: "'16'" }}
                w={{ base: "10", md: "'16'" }}
              >
                <Image src={icon2} />
              </Box>
              <Heading
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight={"normal"}
              >
                10+
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>Your Experince</Text>
            </Box>

            <Box
              borderBottom={"1px"}
              borderColor={"#E5E5E5"}
              display={"flex"}
              gap={"1"}
              py={{ base: "5", md: "0" }}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              h={"full"}
              w={"full"}
            >
              <Box
                p={"10px"}
                rounded={"full"}
                bg={"#EFAFB6"}
                h={{ base: "10", md: "'16'" }}
                w={{ base: "10", md: "'16'" }}
              >
                <Image src={icon3} />
              </Box>
              <Heading
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight={"normal"}
              >
                10+
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>Your Experince</Text>
            </Box>
          </Flex>

          <Box
            // border="1px"
            display={{ base: "none", md: "inline" }}
            position={"absolute"}
            right={"-16"}
            top={"-10"}
            transformStyle="preserve-3d"
            transition="transform 0.5s"
            transform={"rotateY(180deg)"}
          >
            <Image src={leafImg} />
          </Box>
        </Flex>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"10px"}
        >
          <Box>
            <Text
              className={DancingScript.className}
              fontSize={{ base: "10px", md: "20px" }}
              w={"full"}
              textAlign={"center"}
              color={"gray"}
            >
              Experience Diversity
            </Text>
            <Text fontStyle={"italic"} fontSize={{ base: "8px", md: "15px" }}>
              Explore Our Range of Leading Brand Products
            </Text>
          </Box>
        </Box>

        <Box
          w={"100%"}
          p={"0px"}
          h={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={"10"}
          flexDirection={{ base: "column", md: "row" }}
        >
          {testimonial.map((Ele, Ind) => {
            return (
              <>
                <TestimonialCard
                  heading={Ele.heading}
                  text={Ele.text}
                  image={Ele.image}
                />
              </>
            );
          })}
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"10px"}
        >
          <Box>
            <Text
              className={DancingScript.className}
              fontSize={{ base: "10px", md: "20px" }}
              w={"full"}
              textAlign={"center"}
              color={"gray"}
            >
              Experience Diversity
            </Text>
            <Text fontStyle={"italic"} fontSize={{ base: "8px", md: "15px" }}>
              Explore Our Range of Leading Brand Products
            </Text>
          </Box>
        </Box>

        <Box w={"100%"} h={"auto"}>
          <Banner />
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"5"}
          p={"10px"}
        >
          <Box>
            <Text
              className={DancingScript.className}
              fontSize={{ base: "10px", md: "20px" }}
              w={"full"}
              textAlign={"center"}
              color={"#EBEBEB"}
            >
              Experience Diversity
            </Text>
            <Text fontStyle={"italic"} fontSize={{ base: "8px", md: "15px" }}>
              Explore Our Range of Leading Brand Products
            </Text>
            <Box
              p={{ base: "2", md: "5" }}
              borderLeft={"2px"}
              borderColor={"red"}
            >
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "x-small", md: "small" }}
              >
                follow us on Instagram
              </Text>
              <Text fontSize={{ base: "x-small", md: "small" }}>
                @EltherealElegance
              </Text>
            </Box>
          </Box>
        </Box>

        {/* <FooterSLider/> */}
        <FooterSlider />
      </Container>
    </div>
  );
};

export default About;
