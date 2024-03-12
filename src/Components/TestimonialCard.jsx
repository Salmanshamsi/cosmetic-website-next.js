import React from 'react'
import { Box, Heading, Text } from  "@chakra-ui/react"
import Image from "next/image"


const TestimonialCard = ({image, text ,heading}) => {
    console.log(image,"hello")
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="45vh"
      w={{ base: "100%", md: "40vh" }}
    >
      <Box
        h="70%" // Use a percentage for responsive height
        w="100%"
        // Add overflow control for smaller screens
        overflow="hidden"
        // Ensure image scales properly
        position="relative"
        display={'flex'}
        justifyContent={'center'}
      >
        <Image
          src={image}
          alt="Testimonial Image"
          width="100%"
          height="100%" // Fill the entire box
          objectFit="cover" // Maintain aspect ratio
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="1"
        p={{ base: "2", md: "4" }} // Responsive padding
      >
        <Heading 
        fontSize={{base:"smaller",md:"x-small"}} 
        textAlign="center">
          {heading}
        </Heading>
        <Text 
        fontSize={{base:"xx-small",md:"smaller"}}
        textAlign="center">
          {text}
        </Text>
      </Box>
    </Box>
  )
}

export default TestimonialCard