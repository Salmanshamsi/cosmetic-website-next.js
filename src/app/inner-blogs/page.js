'use client'
import AboutHeroSec from "@/Components/AboutHeroSec";
import {Box,Text,ListItem,OrderedList,Flex,Button,Input,AbsoluteCenter,Divider} from '@chakra-ui/react'
import React from "react";
import { Dancing_Script } from "next/font/google"
import Image from "next/image"
import FooterSLider from "@/Components/FooterSLider"
import RecentBlogsCard from "@/Components/RecentBlogsCard"
import b1 from '../../../public/images/inner-banner/b1.png'
import b2 from '../../../public/images/inner-banner/b2.png'
import b3 from '../../../public/images/inner-banner/b3.png'
import RightImg from '../../../public/images/inner-banner/rightMain.png'
import leftImg from '../../../public/images/inner-banner/leftMain.png'
import sale from '../../../public/images/inner-banner/sale.png'
// import mainImg from '../../../public/images/innerbanner/main.png'
// import texture3 from "../../../public/images/home-img/texture-3.png"
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const InnerBlogs = () => {

    const arr = [
        {
            img:b1,
            head:"Slay All Day: Long-lasting Makeup Tips for Busy Beauties",
            title:"Explore five makeup trends this season for a fresh and adventurous beauty look."
        },
        {
            img:b2,
            head:"Slay All Day: Long-lasting Makeup Tips for Busy Beauties",
            title:"Explore five makeup trends this season for a fresh and adventurous beauty look."
        },
        {
            img:b3,
            head:"Slay All Day: Long-lasting Makeup Tips for Busy Beauties",
            title:"Explore five makeup trends this season for a fresh and adventurous beauty look."
        },
    ]

    const tags = ['makeup','face Cream','skin Care','makeup Tips']

  return <div>
      <AboutHeroSec heading={'Our Blogs'} text={'True Natural - True Organic'} />
      <Box
        display={'flex'}
        flexDirection={{base:"column",md:"row"}}
        p={{base:"3",md:'6'}}
      >
        <Box
          w={{base:'full',md:"75%"}}
          display={'flex'}
          flexDirection={'column'}
          p={{base:"8",md:'20'}}
          gap={'8'}
          h={'full'}
        >

            {/* text section */}

            <Box w={'full'} >
            <Box 
              display={"flex"}
              flexDirection={'column'}
              alignItems={'start'}
              justifyContent={'start'}
              gap={'2'}
              p={'5px'}
            >
                <Text
                  className={DancingScript.className}
                  fontSize={{ base: "10px", md: "20px" }}
                  w={'full'}
                  textAlign={'start'}
                  color={"gray"}
                >
                  Experience Diversity
                </Text>
                <Text
                  fontStyle={'italic'}
                  fontSize={{ base: "8px", md: "15px" }}
                >
                  Explore five makeup trends this season for a fresh and adventurous beauty look.
                </Text>
                <Box
                  p={{base:"2",md:"5"}}
                  borderLeft={'2px'}
                  borderColor={'red'}

                  >
                  <Text
                      fontWeight={'bold'}
                      fontSize={{base:"x-small",md:"small"}}
                    >Effortless Beauty: Minimalist Makeup Techniques
                  </Text>

                </Box>
                <Text
                    fontSize={{base:"x-small",md:"small"}}
                    >Discover the latest makeup trends of the season and elevate your beauty routine with bold experimentation. From graphic eyeliner to dewy skin, explore diverse styles that reflect your unique personality. Embrace vibrant hues, statement lips, and feathered brows to express your creativity and stay ahead of the curve in the world of beauty.
                </Text>
                <Text
                  className={DancingScript.className}
                  fontSize={{ base: "10px", md: "40px" }}
                  w={'full'}
                  textAlign={'start'}
                  fontWeight={'bold'}
                  color={"pink"}
                >
                  Elevate your beauty routine with <br/> these trendy looks!
                </Text>
            </Box>
            </Box>

            {/* main-image section */}

            <Box
              h={'auto'}
              w={'full'}
            >
                <Image src={leftImg}  />
            </Box>

            {/* step-section */}

            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'8'}
            >
              <Text
              fontSize={'2xl'}
              fontWeight={'bold'}
              >
                  Title: Five Must-Try Makeup Trends This Season
              </Text>
              <Text>
                    As the seasons change, so do makeup trends. Here are five trends to experiment with:
              </Text>
              <OrderedList spacing={'4'}   >
                <ListItem>
                         Monochromatic Makeup: Use matching shades for eyes, cheeks, and lips.
                </ListItem>
                <ListItem>
                         Graphic Eyeliner: Try bold, artistic eyeliner designs.
                </ListItem>
                <ListItem>
                         Dewy Skin: Achieve a radiant glow with hydrating products.
                </ListItem>
                <ListItem>
                         Statement Lips: Opt for bold lip colors for impact.
                </ListItem>
                <ListItem>
                         Feathered Brows: Embrace soft, natural-looking brows.
                </ListItem>
                
              </OrderedList>
            </Box>

            {/* recent blogs section */}

            <Box
              display={'flex'}
              p={'5'}
              flexDirection={'column'}
              gap={'8'}
            >
              
              <Text
                fontWeight={'semi-bold'}
                fontSize={'4xl'}
                fontStyle={'italic'}
              >
                Recent Blogs
              </Text>
              
              <Box
                display={'flex'}
                flexDirection={{base:"column",md:"row"}}
                gap={'5'}
              >
                {
                    arr.map((ele,ind)=>{
                        return(
                            <RecentBlogsCard key={ind} head={ele.head} title={ele.title} img={ele.img} />
                        )
                    })
                }
              </Box>

            </Box>

        </Box>
        <Box
          w={{base:"full",md:'25%'}}
          p={'8px'}
          h={'full'}
        >
          <Box
            h={'6vh'}
            shadow={'md'}
            display={'flex'}
          >
            <Input rounded={0} h={'full'} />
            <Button
                rounded={0}
              h={'full'}
              color={'gray'}
            >
              search
            </Button>
          </Box>
          <Text
          fontSize={'xl'}
          fontStyle={'initial'}
          p={'3'}
          >
            Latest Blog
          </Text>
          {/* right box image */}
          <Box
            w={'full'}
            h={'auto'}
          >
            <Image src={RightImg} />
          </Box>
            {/* Divider */}
          <Box position='relative' padding='10'>
            <Divider border={'1px'} borderColor={'pink'}  />
            <AbsoluteCenter
             color={'pink'}
             fontStyle={'italic'}
             bg='white' px='4'>
                November 2024
            </AbsoluteCenter>
          </Box>
            {/* text section  */}
            <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'4'}
            >
                <Text
                fontWeight={'bold'}
                >
                    Effortless Beauty: Minimalist Makeup Techniques
                </Text>
                <Text>
                    Explore five makeup trends this season for a fresh and adventurous beauty look.
                </Text>
                <Button
                    w={'25%'}
                    color={'gray'}
                    borderColor={'gray'}
                    rounded={0}
                    fontSize={{base:"small",md:"medium"}}
                    borderBottom={'1px'}
                    bg={'transparent'}
                >
                    READ MORE
                </Button>
            </Box>
            
            {/* TAGS FILTER */}

             <Box
             display={'flex'}
             flexDirection={'column'}
             gap={'4'}
             >
                <Text
                fontSize={'2xl'}
                fontStyle={'italic'}
                >
                    Tags
                </Text>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={'3'}
                >

                {
                    tags.map((ele,ind)=>{
                        return(
                            <Button
                                rounded={'full'}
                                bg={'transparent'}
                                border={'2px'}
                                borderColor={'gray'}
                                px={'10px'}
                                fontSize={{base:"x-small",md:'small'}}
                            >
                                {ele}
                            </Button>
                        )
                    })
                }

                </Box>
             </Box>

             <Box
                display={"flex"}
                alignItems={'center'}
                justifyContent={'start'}
                gap={'5'}
                my={'30px'}
                p={'10px'}
                >
                <Box>
                <Text
                    className={DancingScript.className}
                    fontSize={{ base: "12px", md: "24px" }}
                    w={'full'}
                    textAlign={'start'}
                    color={"gray"}
                >
                    Our Gallery
                </Text>
                <Text
                    fontStyle={'italic'}
                    fontWeight={'bold'}
                    fontSize={{ base: "16px", md: "22px" }}
                >
                    Our beauty community
                </Text>
                <Box
                    p={{base:"2",md:"5"}}
                    borderLeft={'2px'}
                    borderColor={'red'}

                >
                    <Text
                    fontWeight={'bold'}
                    fontSize={{base:"x-small",md:"small"}}
                    >follow us on Instagram</Text>
                    <Text
                    fontSize={{base:"x-small",md:"small"}}
                    >@EltherealElegance</Text>
                </Box>
                </Box>
            </Box>

            <FooterSLider/>

            <Box
            
            >
                <Text
                fontWeight={'bold'}
                fontStyle={'italic'}
                fontSize={'3xl'}
                >
                    Sale upto 30% 
                </Text>
                <Box
                boxShadow={'sm'}
                >
                <Box
                display={'flex'}
                justifyContent={'center'}
                position={'relative'}
                >
                <Box
                    position={'absolute'}
                    right={'0'}
                    py={'1'}
                    px={'6'}
                    color={'white'}
                    bg={'pink'}
                    >sale</Box>
                    <Image width={200} src={sale} />
                </Box>
                <Text
                width={'full'}
                textAlign={'center'}
                color={'pink'}
                >
                    Liplose
                </Text>
                <Text
                width={'full'}
                fontSize={'xl'}
                fontWeight={'bold'}
                textAlign={'center'}
                >
                    pink liplose
                </Text>
                <Text
                width={'full'}
                fontSize={'xl'}
                fontWeight={'bold'}
                textAlign={'center'}
                >
                    <span style={{
                        fontWeight:"normal"
                    }} >$30.00</span>  $25.00
                </Text>
                </Box>
            </Box>

        </Box>
      </Box>

      <Flex height={{ base: "20vh", md: "30vh" }} my={'50px'} w={"100%"} bg={"#F8F8F8"}>
      <Box h={"100%"} w={"30%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={{ base: 0, md: -7 }}>
          <Text
            className={DancingScript.className}
            fontSize={{ base: "10vw", md: "10vw" }}
            color={"#C75D68"}
          >
            Beauty
          </Text>
        </Box>
      </Box>
      <Box
        h={"100%"}
        w={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
      >
        <Text fontSize={{ base: 12, md: "auto" }} textAlign={"center"}>
          Dwell on the beauty of life. Watch the stars, and see yourself running
          with them.
        </Text>
        <Text fontSize={{ base: 10, md: "auto" }}>
          ― Marcus Aurelius, Meditations
        </Text>
        <Button
          border={"2px solid black"}
          bg={"transparent"}
          borderRadius={0}
          fontSize={{ base: 7, md: 10 }}
        >
          EXPLORE MORE
        </Button>
      </Box>
      <Box h={"100%"} w={"20%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={0}>
          {/* <Image src={texture3} /> */}
        </Box>
      </Box>
      </Flex>

  </div>;
};

export default InnerBlogs;


