"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing the correct font utility
import img1 from "../../public/images/home-img/nailpolish.png";
import img2 from "../../public/images/home-img/lipstick.png";
import img3 from "../../public/images/home-img/eyelinear.png";
import img4 from "../../public/images/home-img/liplose.png";

import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const products = [
  {
    img: img1,
    title: "Lipstick",
    desc: "Flat-Lay Pink Lipstick",
    price: 16.0,
  },
  {
    img: img2,
    title: "Eyeliner",
    desc: "Black Eyeliner",
    price: 20.0,
  },
  {
    img: img3,
    title: "Liplose",
    desc: "Pink Liplose",
    price: 30.0,
  },
  {
    img: img4,
    title: "Nail Polish",
    desc: "Red Nail Polish",
    price: 30.0,
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Shop Section */}
      <Box minH={{ base: "80vh", md: "100vh" }} w={"100%"}>
        <Flex
          w={"100%"}
          h={"25%"}
          flexDir={"column"}
          alignItems={"center"}
          mt={5}
        >
          <Text
            className={DancingScript.className}
            fontSize={{ base: "16px", md: "32px" }}
            color={"#BFBFBF"}
          >
            Perfect for you
          </Text>
          <Text
            fontFamily={"Times New Roman"}
            fontStyle={"italic"}
            fontSize={{ base: "18px", md: "34px" }}
            py={2}
            textAlign={"center"}
            mb={{ base: 3, md: 0 }}
          >
            Add Related products to weekly line up
          </Text>
          <Box
            w={{ base: "30%", md: "10%" }}
            border={"1px solid #BFBFBF"}
            mb={{ base: 5, md: 10 }}
          />
        </Flex>

        <Box
          h={{ base: "auto", md: "85vh" }}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          flexWrap={"wrap"}
        >
          <Slider {...settings} style={{ width: "100%" }}>
            {products.map((product, i) => (
              <Card key={i} maxW="sm" boxShadow={"none"}>
                <CardBody
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={{ base: "80%", md: "210px" }}
                    h={{ base: "270px", md: "250px" }}
                    objectFit={"cover"}
                    boxShadow={"sm"}
                  >
                    <Image src={product.img} height="100%" objectFit="cover" />
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Text
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      fontFamily={"Poppins"}
                      color={"#C75D68"}
                      fontSize={"10px"}
                    >
                      {product.title}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      textAlign={"center"}
                      textTransform={"uppercase"}
                      fontWeight={"bold"}
                      fontFamily={"Poppins"}
                    >
                      {product.desc}
                    </Text>
                    <Text
                      fontSize={"14px"}
                      textAlign={"center"}
                      color="#252525"
                      fontFamily={"Poppins"}
                    >
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Slider>
        </Box>

        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            bg={"transparent"}
            border={"2px solid black"}
            borderRadius={0}
            textColor={"black"}
            my={25}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CardSlider;
