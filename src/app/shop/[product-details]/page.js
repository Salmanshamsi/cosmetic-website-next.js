"use client";
import AboutHeroSec from "@/Components/AboutHeroSec";
import { CiHeart } from "react-icons/ci";

import { Dancing_Script } from "next/font/google";
import FooterSlider from "@/Components/FooterSlider";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

import { CiShare2 } from "react-icons/ci";
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Button,
  border,
} from "@chakra-ui/react";

import Image from "next/image";
import liplose from "../../../../public/images/products-img/ligloss.png";
import img2 from "../../../../public/images/home-img/blogGrid2.png";
import { React, useState } from "react";
import Description from "@/Components/Description";
import CardSlider from "@/Components/CardSlider";

const ProductDetails = () => {
  const availableProducts = 56;
  const initialLargeImage = "";

  const [product, setProduct] = useState(1);
  const [largeImage, setLargeImage] = useState(initialLargeImage);

  const handleImageClick = (newLargeImage) => {
    setLargeImage(newLargeImage);
  };

  const addProduct = () => {
    setProduct((prevProduct) => Math.min(prevProduct + 1, availableProducts));
  };

  const removeProduct = () => {
    setProduct((prevProduct) => Math.max(prevProduct - 1, 1)); // Change to 0 if you want to allow 0 products
  };
  return (
    <Box h={"auto"} w={"100%"}>
      <AboutHeroSec heading={"Product"} text={"True Natural - True Organic"} />

      {/* Product details */}
      <Box
        h={{ base: "auto", md: "80vh" }}
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        my={8}
      >
        {/* Box-1 */}
        <Box
          h={{ base: "80vh", md: "80vh" }}
          w={{ base: "100%", md: "40%" }}
          py={5}
        >
          <Box h={"auto"}>
            <Box h={"350px"} boxShadow={"sm"} w={"290px"} m={"0 auto"}>
              {largeImage ? (
                <Image
                  src={largeImage}
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                />
              ) : (
                <Image
                  src={liplose} // Initial small image
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                  onClick={() => handleImageClick(liplose)} // Set click handler for large version
                />
              )}
            </Box>
          </Box>
          <Flex w={"287px"} gap={2} m={"0 auto"} flexWrap={"wrap"} mt={2}>
            <Box
              h={"100px"}
              w={"90px"}
              m={"0 auto"}
              boxShadow={"md"}
              border={"1px solid black"}
            >
              <Image
                src={img2}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(img2)} // Set click handler for large version
              />
            </Box>
            {/* Similar click handlers for other thumbnail images */}
            <Box
              h={"100px"}
              w={"90px"}
              m={"0 auto"}
              boxShadow={"md"}
              border={"1px solid black"}
            >
              <Image
                src={liplose}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(liplose)} // Set click handler for large version
              />
            </Box>
            <Box
              h={"100px"}
              w={"90px"}
              m={"0 auto"}
              boxShadow={"md"}
              border={"1px solid black"}
            >
              <Image
                src={img2}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(img2)} // Set click handler for large version
              />
            </Box>
          </Flex>
        </Box>

        {/* Box-2 */}
        <Box
          h={{ base: "auto", md: "80vh" }}
          w={{ base: "100%", md: "37%" }}
          my={{ base: 6, md: 0 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            h={{ base: "auto", md: "500px" }}
            w={{ base: "90%", md: "550px" }}
            p={6}
            boxShadow={"md"}
          >
            <Text
              textTransform={"uppercase"}
              fontFamily={"Poppins"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Lip-Gloss
            </Text>
            {/* stars */}
            <Flex gap={2} mb={2}>
              <Text fontSize={"12px"}>⭐⭐⭐⭐⭐</Text>
              <Text fontSize="8px" display={"flex"} alignItems={"center"}>
                5 reviews
              </Text>
            </Flex>
            {/* price */}
            <Text
              color={"#C75D68"}
              fontSize={"20px"}
              fontWeight={800}
              fontFamily={"Poppins"}
            >
              $30.00
            </Text>
            {/* list */}
            <Box my={4}>
              <UnorderedList>
                <ListItem
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={"12px"}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={"12px"}
                >
                  Consectetur adipiscing elit
                </ListItem>
                <ListItem
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={"12px"}
                >
                  Integer molestie lorem at massa
                </ListItem>
                <ListItem
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={"12px"}
                >
                  Facilisis in pretium nisl aliquet
                </ListItem>
              </UnorderedList>
            </Box>
            {/* availabe products */}
            <Text
              my={2}
              fontFamily={"Poppins"}
              fontWeight={300}
              fontSize={"12px"}
            >
              Available {availableProducts} products in stock
            </Text>
            <Flex gap={4}>
              <Flex
                h={12}
                w={100}
                border={"1px solid gray"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button bg={"none"} _hover={"none"} onClick={removeProduct}>
                  -
                </Button>
                <Text>{product}</Text>
                <Button bg={"none"} _hover={"none"} onClick={addProduct}>
                  +
                </Button>
              </Flex>

              <Button
                py={6}
                px={8}
                bg={"black"}
                color={"white"}
                borderRadius={0}
                border={"none"}
                _hover={"none"}
              >
                Add to Cart
              </Button>
            </Flex>
            <Box>
              <Button
                py={6}
                px={"96px"}
                fontWeight={700}
                bg={"#C75D68"}
                color={"white"}
                borderRadius={0}
                border={"none"}
                _hover={"none"}
                mt={3}
              >
                BUY NOW
              </Button>
            </Box>

            <Flex
              w={{ base: "85%", md: "70%" }} // Adjusts width based on screen size
              justifyContent={"space-between"}
              my={2}
              px={{ base: 2, md: 4 }} // Responsive padding
              py={2}
            >
              <Box display={"flex"} alignItems={"center"}>
                <CiHeart color="#E53E3E" size="24px" fontWeight={"bold"} />{" "}
                {/* Enhanced icon with color and size */}
                <Box ml={{ base: 1, md: 2 }}>
                  {" "}
                  {/* Responsive margin */}
                  <Text
                    ml={1}
                    fontWeight={"medium"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    WISHLIST
                  </Text>
                  <Box w={"50px"} h="2px" bg="#C75D68" ml={2}></Box>{" "}
                  {/* Converted border to a solid background for better control */}
                </Box>
              </Box>

              <Box display={"flex"} alignItems={"center"}>
                <CiShare2 color="#4A90E2" size="24px" fontWeight={"bold"} />
                {/* Similarly enhanced icon */}
                <Box ml={{ base: 1, md: 2 }}>
                  {/* Responsive margin */}
                  <Text
                    ml={1}
                    fontWeight={"medium"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    SHARE
                  </Text>
                  <Box w={"40px"} h="2px" bg="#C75D68" ml={2}></Box>
                </Box>
              </Box>
            </Flex>

            {/* details */}
            <Box h={"auto"}>
              <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={"12px"}>
                  SKU:
                </Text>
                <Text textTransform={"uppercase"} fontSize={"12px"}>
                  00345k
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={"12px"}>
                  CATEGORY:
                </Text>
                <Text textTransform={"uppercase"} fontSize={"12px"}>
                  MAKEUP
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={"12px"}>
                  TAGS:
                </Text>
                <Text textTransform={"uppercase"} fontSize={"12px"}>
                  skin care, lips, lipstick
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>

      <Description />

      <CardSlider />

      {/* Our Gallery */}
      <Box
        height={{ base: "25vh", md: "40vh" }}
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
      </Box>
      <FooterSlider />
    </Box>
  );
};

export default ProductDetails;
