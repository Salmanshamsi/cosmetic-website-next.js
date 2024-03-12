import React, { useState } from "react";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box h={"auto"} w={"100%"} m={"0 auto"} my={10} p={4}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={6}>
        <Text
          fontFamily={"Poppins"}
          fontWeight={900}
          fontSize={"16px"}
          cursor="pointer"
          borderBottom={
            activeTab === "description" ? "2px solid #C75D68" : "none"
          }
          onClick={() => handleTabClick("description")}
        >
          Description
        </Text>
        <Text
          fontFamily={"Poppins"}
          fontWeight={900}
          fontSize={"16px"}
          cursor="pointer"
          borderBottom={
            activeTab === "productDetails" ? "2px solid #C75D68" : "none"
          }
          onClick={() => handleTabClick("productDetails")}
        >
          Product Details
        </Text>
        <Text
          fontFamily={"Poppins"}
          fontWeight={900}
          fontSize={"16px"}
          cursor="pointer"
          borderBottom={activeTab === "reviews" ? "2px solid #C75D68" : "none"}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </Text>
      </Flex>
      {/* Content Box */}
      <Box
        h={"auto"}
        w={{ base: "100%", md: "80%" }}
        m={"0 auto"}
        border={"1px solid #9D9D9D"}
        mt={2}
        p={4}
      >
        {/* Conditional rendering based on activeTab */}
        {activeTab === "description" && (
          <Box
            color={"#9D9D9D"}
            px={{ base: 1, md: 10 }}
            py={{ base: 1, md: 6 }}
          >
            <Text fontFamily={"Poppins"} mb={4}>
              Here is the product description:
            </Text>
            <UnorderedList>
              <ListItem>description 1</ListItem>
              <ListItem>description 2</ListItem>
              <ListItem>description 3</ListItem>
            </UnorderedList>
          </Box>
        )}
        {activeTab === "productDetails" && (
          <Box
            color={"#9D9D9D"}
            px={{ base: 1, md: 10 }}
            py={{ base: 1, md: 6 }}
          >
            <Text fontFamily={"Poppins"} mb={4}>
              Here are the product details:
            </Text>
            <UnorderedList>
              <ListItem>details 1</ListItem>
              <ListItem>details 2</ListItem>
              <ListItem>details 3</ListItem>
            </UnorderedList>
          </Box>
        )}
        {activeTab === "reviews" && (
          <Box
            color={"#9D9D9D"}
            px={{ base: 1, md: 10 }}
            py={{ base: 1, md: 6 }}
          >
            <Text fontFamily={"Poppins"} mb={4}>
              Here are the reviews:
            </Text>
            <UnorderedList>
              <ListItem>Review 1</ListItem>
              <ListItem>Review 2</ListItem>
              <ListItem>Review 3</ListItem>
            </UnorderedList>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Description;
