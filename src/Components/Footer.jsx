import React from "react";
import { Box, Text, List, ListItem, Input, Button } from "@chakra-ui/react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      mt={"20px"}
      w={"100%"}
      h={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      bgColor={"black"}
      color={"white"}
    >
      <Box
        w={"100%"}
        h={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box h={"auto"} w={"auto"} position={"relative"}>
          <Box
            w={"150px"}
            h={"100px"}
            bg={"white"}
            position={"absolute"}
            top={"-10"}
            p={"2"}
            left={"-20"}
          >
            <Box border={"1px"} borderColor={"black"} h={"full"} w={"full"}>
              <Text
                fontWeight={"bold"}
                fontSize={"2xl"}
                textAlign={"center"}
                color={"black"}
              >
                Etherial Eligance
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        fontSize={{ base: "small", md: "md" }}
        alignItems={"center"}
        justifyContent={"center"}
        p={{ base: "5", md: "0" }}
      >
        <Box
          w={"full"}
          p={"10"}
          my={"5"}
          display={"flex"}
          flexDirection={"column"}
          gap={"5"}
        >
          <Text fontWeight={"bold"} fontSize={"2xl"} textAlign={"center"}>
            CONTACT
          </Text>
          <Text textAlign={"center"}>58 white st NEW YORK</Text>
          <Text textAlign={"center"}>EtherealElegance@gmail.com</Text>
          <Text textAlign={"center"}>+1 (800) 987 456 98</Text>
        </Box>

        <Box
          h={"auto"}
          w={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={{ base: "0", md: "100" }}
          flexDirection={"column"}
          gap={"2"}
        >
          <Text w={"full"} textAlign={"center"} px={"1"}>
            Enhance your natural beauty with our curated collection of cosmetics
          </Text>

          <Box p={"3"} display={"flex"} gap={"3"}>
            <Button
              bg={"transparent"}
              rounded={"full"}
              color={"white"}
              border={"1px"}
              borderColor={"white"}
            >
              <FaFacebookF />
            </Button>
            <Button
              bg={"transparent"}
              rounded={"full"}
              color={"white"}
              border={"1px"}
              borderColor={"white"}
            >
              <FaInstagram />
            </Button>
          </Box>

          <List display={"flex"} p={"5"} gap={"5"}>
            <ListItem>Home</ListItem>
            <ListItem>section</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Blogs</ListItem>
            <ListItem>Product</ListItem>
          </List>
        </Box>

        <Box
          w={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={{ base: "10", md: "0" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"2"}>
            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>
              Subscribe To our Newsletter
            </Text>
            <Box display={"flex"}>
              <Input color={"gray"} placeholder="Email" rounded={"0"} />
              <Button rounded={"0"}>
                <IoMdArrowRoundForward />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        borderTop={"1px"}
        w={"100%"}
        h={"10vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={{ base: "small", md: "md" }}>
          COPYRIGHT © 2024 Ethereal Elegance 
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
