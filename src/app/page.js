"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import HeroSection from "@/Components/HeroSection";
import Rectangle1Img from "../../public/images/home-img/Rectangle1.png";
import lipstick from "../../public/images/home-img/lipstick.png";
import Eyeliner from "../../public/images/home-img/eyelinear.png";
import liplose from "../../public/images/home-img/liplose.png";
import nailPolish from "../../public/images/home-img/nailpolish.png";
import aboutImg from "../../public/images/home-img/about-img.png";
import aboutwing from "../../public/images/home-img/aboutwing.png";
import clinque from "../../public/images/home-img/clinque.png";
import partten8 from "../../public/images/home-img/partten-8.png";
import white_syrup from "../../public/images/home-img/whitening_syrup.png";
import Image from "next/image";
import LogosSection from "@/Components/LogosSection";

import jeweImg from "../../public/images/home-img/Jewe2.png";
import Testimonials from "@/Components/Testimonials";
import BeautyBlogs from "@/Components/BeautyBlogs";
import BestProduct from "@/Components/BestProduct";

import { Dancing_Script } from "next/font/google";
import ExploreMore from "@/Components/ExploreMore";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const cardsData = [
  {
    text1: "Must Have",
    text2: "Makeup Set",
    // img:
  },
  {
    text1: "Nature",
    text2: "Foundation",
    // img:
  },
  {
    text1: "Must Have",
    text2: "Body Cleaner",
    // img:
  },
  {
    text1: "Must Have",
    text2: "Perfumes",
    // img:
  },
];

const products = [
  {
    img: lipstick,
    title: "Lipstick",
    desc: "Flat-Lay Pink Lipstick",
    price: 16.0,
  },
  {
    img: Eyeliner,
    title: "Eyeliner",
    desc: "Black Eyeliner",
    price: 20.0,
  },
  {
    img: liplose,
    title: "Liplose",
    desc: "Pink Liplose",
    price: 30.0,
  },
  {
    img: nailPolish,
    title: "Nail Polish",
    desc: "Red Nail Polish",
    price: 30.0,
  },
];
export default function Home() {

  
  return (
    <Box h={"100%"}>
      <Box>
        <HeroSection />
      </Box>

      {/* Cards */}
      <Flex
        height={{ base: "auto", md: "30vh" }}
        width="100%"
        gap={2}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        p={5}
        justifyContent="space-between"
        alignItems="center"
      >
        {cardsData.map((data, i) => {
          return (
            <Box
              key={i}
              pos={"relative"}
              h={{ base: "125px", md: "160px" }} // Adjust height responsively
              w={{ base: "100%", sm: "48%", md: "300px" }} // Adjust width responsively
              boxShadow={"md"}
            >
              <Box h={"100%"} w={"100%"} pos={"absolute"} zIndex={-6}>
                <Image
                  src={Rectangle1Img}
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Box
                h={"50%"}
                w={"50%"}
                position={"absolute"}
                right={0}
                bottom={0}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                zIndex={9}
              >
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  textColor="#DBAFAF"
                  className={DancingScript.className}
                  fontWeight={"900"}
                >
                  {data.text1}
                </Text>
                {/* Adjust font size responsively for "Makeup" text */}
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  textColor="#383838"
                  fontFamily="Poppins"
                  fontWeight={"light"}
                >
                  {data.text2}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Flex>

      {/* Shop========== */}
      <Box minH={"100vh"} w={"100%"}>
        <Flex w={"100%"} h={"25%"} flexDir={"column"} alignItems={"center"}>
          <Text
            className={DancingScript.className}
            fontSize={"32px"}
            color={"#BFBFBF"}
            mt={5}
          >
            Perfect for you
          </Text>
          <Text
            fontFamily={"Times New Roman"}
            fontStyle={"italic"}
            fontSize={"34px"}
            py={2}
            textAlign={"center"}
          >
            Froms Editor's Pick Collection
          </Text>
          <Box
            w={{ base: "30%", md: "10%" }}
            border={"1px solid #BFBFBF"}
            mb={{ base: 5, md: 10 }}
          ></Box>
        </Flex>

        <Flex
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          gap={{ base: 5, md: 0 }}
        >
          {products.map((product, i) => (
            <Box
              w={{ base: "90%", sm: "45%", md: "30%", lg: "19%" }}
              key={i}
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              style={{
                boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`, // Default shadow
                transition: "box-shadow 0.3s ease",
                ":hover": {
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Image src={product.img} alt="Product" />
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                py={2}
              >
                <Text textTransform={"uppercase"} textColor={"#C75D68"}>
                  {product.title}
                </Text>
                <Text textTransform={"uppercase"}>{product.desc}</Text>
                <Text>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>

        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={50}
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

      {/* Logos */}
      <Box>
        <LogosSection />
      </Box>

      {/* About us */}
      <Box
        height={{ base: "auto", md: "100vh" }}
        width="100%"
        display="flex"
        flexWrap="wrap"
      >
        {/* Box 1 */}
        <Box
          mt={{ base: 10, md: 0 }}
          height={{ base: "80vh", md: "100vh" }}
          width={{ base: "100%", md: "50%" }}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {/* Child 1 of Box 1 */}
          <Box
            height="35%"
            width={{ base: "30%", md: "25%" }}
            position="absolute"
            top={{ base: "15%", md: "10%" }}
            left={{ base: "28%", md: "26%" }}
            transform="translateX(-50%)"
            zIndex="0"
          >
            <Image
              src={aboutwing}
              alt="About Wing"
              maxW="100%"
              height="auto"
              objectFit="cover"
            />
          </Box>

          {/* Child 3 of Box 1 */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            zIndex={99}
            transform="translateX(-50%)"
          >
            <Button zIndex={5} borderRadius={0}>
              Fancy Look
            </Button>
          </Box>

          {/* Child 2 of Box 1 */}
          <Box
            height={{ base: "55%", md: "64%" }}
            width="57%"
            border="1px solid #252525"
            zIndex="2"
          ></Box>

          {/* Child 4 of Box 1 */}
          <Box
            height={{ base: "55%", md: "65%" }}
            width="57%"
            position="absolute"
            top={{ base: "24%", md: "20%" }}
            left={{ base: "23%", md: "23.5%" }}
            zIndex="1"
          >
            <Image
              src={aboutImg}
              alt="About Image"
              objectFit="cover"
              style={{ height: "100%" }}
            />
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          height={{ base: "72vh", md: "100vh" }}
          width={{ base: "100%", md: "50%" }}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={{ base: 1, md: 3 }}
          px={{ base: 2, md: 0 }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            pr={{ base: 2, md: 40 }}
            pl={{ base: 2, md: 0 }}
          >
            <Text
              fontSize={"32px"}
              color={"#BFBFBF"}
              className={DancingScript.className}
              placeSelf={"start"}
            >
              About us
            </Text>
            <Text
              fontFamily={"Times New Roman"}
              fontStyle={"italic"}
              fontSize={{ base: "32px", md: "34px" }}
            >
              We Guaranted a High Quality
            </Text>
            <Box borderLeft={"2px solid #C75D68"} pl={4} my={3} mb={3}>
              <Text fontFamily={"Poppins"} color={"#303030"} fontSize={"14px"}>
                At EtherealElegance, we believe in the transformative power of
                beauty. Our curated cosmetics collection is meticulously crafted
                to inspire confidence and elevate your natural allure.
              </Text>
            </Box>

            <Box>
              <Text
                fontFamily={"Poppins"}
                color={"#7A7A7A"}
                lineHeight={6}
                fontSize={"12px"}
              >
                We understand that beauty is more than just skin deep; it's
                about embracing your individuality and expressing your personal
                style with effortless elegance. That's why we offer premium
                offerings that cater to modern sophistication, ensuring you feel
                empowered and beautiful in every moment.
              </Text>
            </Box>

            <Box display={"flex"} gap={20} py={5}>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  color={"#C75D68"}
                  fontSize={"40px"}
                  fontStyle={"italic"}
                  fontFamily={"Times New Roman"}
                >
                  500k
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  color={"#292929"}
                  fontSize={"12px"}
                >
                  Cosmetics Sold
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  color={"#C75D68"}
                  fontSize={"40px"}
                  fontStyle={"italic"}
                  fontFamily={"Times New Roman"}
                >
                  10+
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  color={"#292929"}
                  fontSize={"12px"}
                >
                  Years Experience
                </Text>
              </Box>
            </Box>

            <Box mt={4}>
              <Button
                border={"1px solid black"}
                borderRadius={"none"}
                bgColor={"white"}
                fontFamily={"Poppins"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={1}
                p={{ base: 4, md: 7 }}
              >
                EXPLORE MORE
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Holiday Sets */}
      <Box
        mt={{ base: 10, md: 0 }}
        h={"95vh"}
        w={"100vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          h={{ base: "60vh", md: "67vh" }}
          w={"100vw"}
          bg={"#F5F5F5"}
          flexWrap={"wrap"}
          mt={{ base: -150, md: 0 }}
        >
          <Box
            h={{ base: "40%", md: "100%" }}
            w={{ base: "100%", md: "65%" }}
            pl={{ base: 2, md: 20 }}
            pr={{ base: 2, md: 0 }}
          >
            <Box
              h={{ base: "15%", md: "25%" }}
              w={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box mt={4}>
                <Image
                  src={jeweImg}
                  style={{ height: "34px", width: "34px" }}
                />
              </Box>
              <Box mt={10}>
                <Image
                  src={jeweImg}
                  style={{ height: "20px", width: "20px" }}
                />
              </Box>
            </Box>
            <Box h={"45%"} w={"100%"}>
              <Text
                className={DancingScript.className}
                textColor={"#C75D68"}
                fontSize={"32px"}
              >
                Holiday Sets
              </Text>
              <Text
                fontFamily={"Times New Roman"}
                fontStyle={"italic"}
                fontWeight={"bold"}
                fontSize={"40px"}
                mt={-4}
              >
                You will love it!
              </Text>
              <Box py={5}>
                <Text
                  color={"#252525"}
                  fontFamily={"Poppins"}
                  fontSize={"12px"}
                >
                  Unleash the power of radiant skin with our potent formula
                  enriched with nourishing ingredients. Say goodbye to dullness
                  and hello to a luminous glow. Don't miss out, shop now and
                  reveal your best skin yet!
                </Text>
              </Box>
            </Box>
            <Box
              h={{ base: "15%", md: "30%" }}
              w={{ base: "70%", md: "50%" }}
              display={"flex"}
              justifyContent={"space-between"}
              mt={{ base: "7%", md: "0" }}
            >
              <Box>
                <Button
                  bg={"transparent"}
                  border={"2px solid black"}
                  borderRadius={0}
                  mt={{ base: "85%", md: "0" }}
                >
                  READ MORE
                </Button>
              </Box>
              <Box mt={{ base: "35%", md: 5 }}>
                <Image
                  src={jeweImg}
                  style={{ height: "20px", width: "20px" }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            h={{ base: "40vh", md: "100vh" }}
            mt={{ base: "20%", md: "-5%" }}
            w={{ base: "100%", md: "35%" }}
            ml={{ base: "30%", md: 0 }}
          >
            <Image src={clinque} style={{ height: "90%", width: "100%" }} />
          </Box>
        </Flex>
      </Box>

      {/* Color */}
      <BestProduct />

      {/* Best Product */}
      <Flex h={{ base: "100vh", md: "80vh" }} w={"100%"} flexWrap={"wrap"}>
        <Box
          h={{ base: "40vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          display={"flex"}
          flexDir={"row"}
        >
          <Box
            h={"100%"}
            w={{ base: "30%", md: "35%" }}
            ml={{ base: "-5", md: "-5" }}
          >
            <Image src={partten8} />
          </Box>
          <Box h={"100%"} w={{ base: "70%", md: "65%" }}>
            <Image src={white_syrup} alt="syrup" />
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          h={{ base: "50vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          position="relative"
        >
          {/* Serum Text (Background) */}
          <Text
            fontSize={{ base: "30vw", md: "13vw" }}
            className={DancingScript.className}
            position="absolute"
            top="50%"
            left={{ base: "55%", md: "60%" }}
            transform="translate(-50%, -50%)"
            color="#C75D68"
            zIndex="-1"
            opacity={0.6}
          >
            Serum.
          </Text>

          {/* Centered Text */}
          <Box
            h="100%"
            display="flex"
            justifyContent="center"
            flexDir="column"
            px={{ base: 3, md: 20 }}
            zIndex="9"
          >
            <Text
              fontSize={{ base: "32px", md: "32px" }}
              color="#BFBFBF"
              className={DancingScript.className}
            >
              Best Product
            </Text>
            <Text
              fontFamily="Times New Roman"
              fontStyle="italic"
              fontSize={{ base: "35px", md: "44px" }}
              mt={{ base: -3, md: -13 }}
            >
              Whitening Serum.
            </Text>
            <Text
              my={{ base: 3, md: 6 }}
              fontFamily="Poppins"
              color="#252525"
              fontWeight={600}
              textTransform="uppercase"
            >
              Introducing the Whitening Serum, a breakthrough in skincare
            </Text>

            <Box borderLeft="2px solid #C75D68">
              <Text pl={4} fontFamily="Poppins" color="#7A7A7A">
                Formulated with advanced ingredients, it targets dark spots and
                uneven skin tone, unveiling a brighter, more radiant complexion.
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Explore More */}
      <ExploreMore />

      {/* Beauty Blog */}
      <BeautyBlogs />

      {/* Testimonial */}
      <Testimonials />
    </Box>
  );
}
