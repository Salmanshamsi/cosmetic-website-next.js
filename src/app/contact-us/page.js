import AboutHeroSec from "@/Components/AboutHeroSec";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ContactUsComp from "@/Components/ContactUsComp";
import LogosSection from "@/Components/LogosSection";
import EmailUs from "@/Components/EmailUs";
import texture3 from "../../../public/images/home-img/texture-3.png";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import OurGallery from "@/Components/OurGallery";
import FooterSlider from "@/Components/FooterSlider";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});
const ContactUs = () => {
  return (
    <Box h={"auto"} w={"100%"}>
      <Box h={{ base: "80vh", md: "90vh" }}>
        <AboutHeroSec
          heading={"Get in Touch"}
          text={"True Natural - True Organic"}
        />
      </Box>

      {/* feel free to contact us */}
      <ContactUsComp />

      {/* logo */}
      <LogosSection />

      {/* Email */}
      <EmailUs />

      {/* welcome to our beauty community */}
      <OurGallery />

      {/* slider */}
      <FooterSlider />
    </Box>
  );
};

export default ContactUs;
