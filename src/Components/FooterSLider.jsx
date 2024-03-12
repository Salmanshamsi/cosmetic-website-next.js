"use client";
import React from "react";
import { useState } from "react";
import image1 from "../../public/images/about-img/s1.png";
import image2 from "../../public/images/about-img/s2.png";
import image3 from "../../public/images/about-img/s3.png";
import image4 from "../../public/images/about-img/s4.png";
import image5 from "../../public/images/about-img/s5.png";
import image6 from "../../public/images/about-img/s6.png";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const FooterSLider = () => {
  const [active, setActive] = useState(0);
  const [footSlider, setFootSlider] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]);

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={"100%"} // Change width to 100%
        maxW={"1600px"} // Limit maximum width to 1080px
        h={"35vh"} // Set height to 35vh
        gap={"5"}
        overflowX={"auto"} // Change to auto for dynamic overflow handling
        whiteSpace={"nowrap"} // Prevent wrapping of children
      >
        {footSlider.map((ele, ind) => {
          return (
            <Box
              key={ind}
              h={"auto"}
              minWidth={"150px"} // Set minimum width for children
              onClick={() => {
                setActive(ind);
              }}
            >
              <Image
                height={"full"} // Corrected typo: height instead of hight
                width={"100%"} // Set width to 100% to ensure image fills the container
                src={ele}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"5"}
        w={"100%"}
      >
        <Box display={"flex"} gap={"2"}>
          {footSlider.map((ele, ind) => {
            return (
              <>
                <Box
                  rounded={"full"}
                  p={{ base: "1", md: "2" }}
                  bg={`${active === ind ? "black" : "gray"}`}
                ></Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSLider;
