import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import logo1 from "../../public/images/home-img/Logo1.png";
import logo2 from "../../public/images/home-img/Logo2.png";
import logo3 from "../../public/images/home-img/Logo3.png";
import logo4 from "../../public/images/home-img/Logo4.png";
import logo5 from "../../public/images/home-img/logo5.png";
import RectangleLogo from "../../public/images/home-img/Rectangle-logo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogosSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const settings = {
    dots: false,
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
    <Box
      h={{ base: "15vh", md: "35vh" }}
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      gap={5}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ base: 2, md: 20 }}
    >
      {/* -------------------- */}
      <Slider {...settings} style={{ width: "100%" }}>
        {logos.map((logo, i) => (
          <Box
            key={i}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={{ base: "80%", md: "210px" }}
            height={{ base: "270px", md: "250px" }}
            objectFit={"cover"}
            boxShadow={"sm"}
            position="relative"
          >
            {/* Logo Image */}
            <Box
              h={{ base: "20%", md: "100%" }}
              w={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={{ base: 2, md: 0 }}
            >
              <Image
                src={logo}
                height="100%"
                objectFit="contain"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
            </Box>
          </Box>
        ))}
      </Slider>
      {/* -------------------- */}

      {/* Background Image */}
      <Box
        h={"40vh"} // Adjusted height for small screens
        w={"100%"}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
      >
        <Image src={RectangleLogo} objectFit="cover" border="none" />
      </Box>
    </Box>
  );
};

export default LogosSection;
