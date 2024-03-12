import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import img1 from "../../public/images/home-img/blogGrid1.png";
import img2 from "../../public/images/home-img/blogGrid2.png";
import img3 from "../../public/images/home-img/BlogGrid3.png";
import img4 from "../../public/images/home-img/BlogGrid4.png";
import img5 from "../../public/images/home-img/BlogGrid6.png";
import Link from "next/link";

const BlogsGrid = () => {
  const blogData = [
    {
      img: img1,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },
    {
      img: img2,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },
    {
      img: img5,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },

    {
      img: img3,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },
    {
      img: img4,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },
    {
      img: img5,
      date: "November 2024",
      title: "Five Makeup Trends to Experiment with This Season.",
      desc: "Explore five makeup trends this season for a fresh and adventurous beauty look.",
    },
  ];

  return (
    <Flex
      direction={"row"}
      flexWrap={"wrap"}
      justify={"center"}
      w={"100%"}
      px={{ base: 1, md: 20 }}
      pb={1}
    >
      {blogData.map((elem, i) => {
        return (
          <Card
            key={i}
            w={{ base: "280px", md: "28%" }}
            border={"none"}
            shadow={"none"}
            bg={"transparent"}
            mb={4}
          >
            <CardBody>
              <Image src={elem.img} />
              <Stack mt="1" spacing="2">
                <Text
                  fontFamily={"Poppins"}
                  color={"#C75D68"}
                  fontSize={{ base: "12px", md: "14px" }}
                  pt={1}
                >
                  -- {elem.date} --
                </Text>
                <Heading
                  fontSize={{ base: "12px", md: "14px" }}
                  fontFamily={"Poppins"}
                >
                  {elem.title}
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "14px" }}
                  color={"#7A7A7A"}
                  fontFamily={"Poppins"}
                >
                  {elem.desc}
                </Text>
                <Text textDecor={"underline"} fontSize={"12px"}>
                  READ MORE
                </Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
};

export default BlogsGrid;
