"use client";
import { Box, Button, Card, Text } from "@chakra-ui/react";
import { Dancing_Script } from "next/font/google";

import blogImg from "../../public/images/home-img/blogImg1.png";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

import Image from "next/image";

const BeautyBlogs = () => {
  // Example data for the blog posts, assuming you might fetch this from an API or have it statically defined
  const blogPosts = [
    {
      id: 1,
      title: "Five Makeup Trends to Experiment with This Season",
      date: "November 2024",
      imgUrl: blogImg,
    },
    {
      id: 2,
      title: "Five Makeup Trends to Experiment with This Season",
      date: "November 2024",
      imgUrl: blogImg,
    },
    {
      id: 3,
      title: "Five Makeup Trends to Experiment with This Season",
      date: "November 2024",
      imgUrl: blogImg,
    },
  ];

  return (
    <Box my={5} h="auto" w="100%" zIndex={2}>
      <Box h={{ base: "auto", md: "70%" }}>
        {" "}
        {/* Adjusted height for better layout */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Text
            // Assuming you have the font applied globally
            fontSize={{ base: "8vw", md: "5vw" }} // Adjusted font size for smaller screens
            color="#BFBFBF"
            fontFamily="'Dancing Script', cursive" // Make sure the font name matches your import
          >
            Beauty Blog
          </Text>
          <Text fontStyle="italic" color="#252525">
            We Love to share our Story & Experience
          </Text>
        </Box>
        <Box height="auto" width="85%" margin="0 auto">
          <Box
            display="flex"
            justifyContent="space-around"
            mt={10}
            flexWrap="wrap"
            gap={5}
          >
            {blogPosts.map((post) => (
              <Box
                key={post.id}
                border="1px solid black"
                borderRadius={0}
                w={{ base: "240px", md: "26%" }}
                p={1}
                bg="white" // Added for better visibility
              >
                <Image
                  src={post.imgUrl}
                  alt="Blog Image"
                  width={320} // Maintains image width
                  height="auto" // Allows image to adjust based on content
                  layout="responsive"
                />
                <Box p={4}>
                  <Text textAlign="center" color="#C75D68">
                    {post.date}
                  </Text>
                  <Text textAlign="center" py={2}>
                    {post.title}
                  </Text>
                  <Text
                    textDecor="underline"
                    textAlign="center"
                    color="#7A7A7A"
                    _hover={{ cursor: "pointer" }}
                  >
                    Read More
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          my={4}
        >
          <Button
            border="2px solid black"
            bg="transparent"
            borderRadius={0}
            fontSize={{ base: 7, md: "10px" }} // Adjusted font size for smaller screens
            _hover={{ bg: "black", color: "white" }} // Added hover effect for better interaction
          >
            EXPLORE MORE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BeautyBlogs;
