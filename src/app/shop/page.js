"use client";
import AboutHeroSec from "@/Components/AboutHeroSec";
import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  Image,
  AbsoluteCenter,
  Box,
  Input,
  Flex,
  Heading,
  Container,
  IconButton,
  Center,
  SimpleGrid,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { SelectBox } from "./SelectBox";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const products = [
  {
    imageSrc: "images/products-img/img_eyelinear_image.png",
    title: "pink lip-gloss",
    category: "liplose",
    price: "$30.00",
    isNew: true,
  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_176x77.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
    isNew: false,
  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_221x123.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
    isNew: true,
  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_3.png",
    title: "pink liplose",
    category: "liplose",
    isNew: true,

    price: "$30.00",
  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_4.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
    isNew: false,

  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_5.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
    isNew: false,

  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_6.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
    isNew: true,

  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_222x180.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
  },
  {
    imageSrc: "images/products-img/img_eyelinear_image_222x194.png",
    title: "pink liplose",
    category: "liplose",
    price: "$30.00",
  },
  // Add more products with isNew property...
];



const Shop = () => {
  return (
    <Box h={"auto"} w={"100%"}>
      <AboutHeroSec
        heading={"All Products"}
        text={"True Natural - True Organic"}
      />
      <Container
        mt="120px"
        w="100%"
        display="flex"
        flexDirection={{ md: "row", base: "column" }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1528px"
        px={{ md: "0px", base: "20px" }}
        gap="40px"
      >
        <Flex
          w={{ md: "26%", base: "100%" }}
          flexDirection="column"
          alignItems="start"
        >
          <Text size="4xl" color="black.900">
            All
          </Text>
          <Box h="2px" mt="10px" bg="gray.400" w="100%" />
          <Box h="5px" rounded={'full'} mt="-4px" bg="red.300" w="28%" />
        </Flex>
        <Flex
          gap="23px"
          w={{ md: "67%", base: "100%" }}
          flexDirection="column"
          alignItems="end"
        >
          <Flex gap="22px" w={{ md: "39%", base: "100%" }} alignItems="center">
            <Text color="gray.500_01" whiteSpace={'nowrap'} fontWeight={500}>
              Sort by:
            </Text>
            <SelectBox
              shape="round"
              indicator={<Image src="images/products-img/img_bxsuparrow.svg" />}
              name="relevance"
              
              placeholder="Relevance"
              options={dropDownOptions}
              style={{ fontWeight: 300, gap: "1px", w: "81%"  }}
            />
          </Flex>
          <Box h="1px" bg="gray.500_01" w="100%" />
        </Flex>
      </Container>


 <Container
        mt="27px"
        w="100%"
        display="flex"
        flexDirection={{ md: "row", base: "column" }}
        justifyContent="space-between"
        alignItems="start"
        maxW="1528px"
        px={{ md: "0px", base: "20px" }}
        gap="40px"
      >
        <Flex
          mt={{ md: "3px", base: "0px" }}
          w={{ md: "26%", base: "100%" }}
          flexDirection="column"
          alignItems="start"
        >
          <Text size="4xl" color="black.900">
            Filter By
          </Text>
           <Box h="2px" mt="10px" bg="gray.400" w="100%" />
          <Box h="5px" rounded={'full'} mt="-4px" bg="red.300" w="28%" />
          <Text size="4xl" color="black.900" mt="30px" fontSize="22.84px">
            Size
          </Text>
          <Flex
            mt="22px"
            gap="28px"
            flexDirection="column"
            alignItems="start"
            w="100%"
          >
            <Checkbox fontWeight={300} gap="12px" borderRadius="4px">
              S(2)
            </Checkbox>
            <Checkbox fontWeight={300} gap="12px" borderRadius="4px">
              M(2)
            </Checkbox>
            <Checkbox fontWeight={300} gap="12px" borderRadius="4px">
              L(2)
            </Checkbox>
            <Checkbox fontWeight={300} gap="12px" borderRadius="4px">
              XL(2)
            </Checkbox>
          </Flex>
          <Text size="3xl" color="black.900" mt="48px" fontSize="19.75px">
            Product
          </Text>
          <Flex
            mt="19px"
            gap="20px"
            flexDirection="column"
            alignItems="start"
            w="100%"
          >
            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Lips
            </Checkbox>
            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Hairs
            </Checkbox>
            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Nails
            </Checkbox>

            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Eyes
            </Checkbox>
            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Face
            </Checkbox>
          </Flex>
          <Text size="3xl" color="black.900" mt="46px" fontSize="19.51px">
            Availability
          </Text>
          <Flex
            mt="16px"
            gap="21px"
            flexDirection="column"
            alignItems="start"
            w="100%"
          >
            <Checkbox
              ml={{ md: "1px", base: "0px" }}
              fontWeight={300}
              gap="14px"
              borderRadius="3px"
            >
              In Stock (32)
            </Checkbox>
            <Checkbox fontWeight={300} gap="14px" borderRadius="3px">
              Not Available (2)
            </Checkbox>
          </Flex>
          <Text
            size="5xl"
            color="black.900"
            mt="45px"
            ml={{ md: "4px", base: "0px" }}
            fontSize="22.79px"
          >
            Price
          </Text>
          <Text
            size="xl"
            color="black.900"
            mt="1px"
            ml={{ md: "4px", base: "0px" }}
            fontSize="15.19px"
            fontWeight={300}
          >
            €13.00 - €44.00
          </Text>
          <Image src="images/products-img/img_group_223.svg" h="17px" mt="2px" />
          <Text size="5xl" color="black.900" mt="51px">
            Tags
          </Text>
          <Box
            h="1px"
            mt="14px"
            ml={{ md: "4px", base: "0px" }}
            bg="gray.500_01"
            w="99%"
          />
          <Box h="2px" ml={{ md: "4px", base: "0px" }} bg="red.300" w="21%" />
          <Flex mt="17px" gap="10px" w={{ md: "92%", base: "100%" }}>
            <Flex w="27%">
              <Button fontWeight={300} w="100%" borderRadius="22px">
                Makeup
              </Button>
            </Flex>
            <Flex gap="10px" w="71%">
              <Flex w="49%" justifyContent="center">
                <Button fontWeight={300} w="100%" borderRadius="22px">
                  Face Cream
                </Button>
              </Flex>
              <Flex w="49%" justifyContent="center">
                <Button
                  fontWeight={300}
                  w="100%"
                  borderRadius="22px"
                  px={{ base: "20px", sm: 0 }}
                >
                  Skin Care
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Image
            src="images/products-img/img_rectangle_163.png"
            mt="28px"
            w={{ md: "94%", base: "100%" }}
            h="431px"
          />
        </Flex>






        

        <Flex
          gap="53px"
          w={{ md: "67%", base: "100%" }}
          borderTop={'1px solid grey'}
          flexDirection="column"
          alignItems="center"
        >
          {/* Simple Grid with out map
          <SimpleGrid
          mt={10}
            w="100%"
            gap={{ md: "41px", base: "20px" }}
            columns={{ md: 3, base: 1, sm: 2 }}
            justifyContent="center"
          >
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex w="100%" flexDirection="column" alignItems="center">
                <Flex
                  gap="22px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p="10px"
                >
                  <Flex
                    w={{ md: "25%", base: "100%" }}
                    justifyContent="flex-end"
                  >
                    <Text
                      size="md"
                      color="white.A700"
                      fontSize="13.64px"
                      bg="red.300"
                      w="70px"
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                      h="27px"
                      px="20px"
                      py="3px"
                    >
                      New
                    </Text>
                  </Flex>
                  <Image
                    src="images/products-img/img_eyelinear_image.png"
                    mb="49px"
                    w={{ md: "43%", base: "100%" }}
                    h="auto"
                  />
                </Flex>
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "37%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink lip-gloss{" "}
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              bg="white.A700"
              boxShadow="xs"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              p="9px"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                mb="7px"
                w={{ md: "99%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex w="100%" justifyContent="center">
                  <Flex w="100%" flexDirection="column" alignItems="center">
                    <Flex
                      zIndex={1}
                      w="100%"
                      justifyContent="space-between"
                      alignItems="start"
                    >
                      <Flex gap="11px" w="auto">
                        <IconButton
                          size="xs"
                          variant="fill"
                          colorScheme="gray_200"
                          icon={
                            <Image src="images/products-img/img_mdi_heart_outline.svg" />
                          }
                          aria-label="348:1270-mdiheart_one"
                          w="41px"
                          borderRadius="20px"
                        />
                        <IconButton
                          size="xs"
                          variant="fill"
                          colorScheme="gray_200"
                          icon={<Image src="images/products-img/img_material_symbol.svg" />}
                          aria-label="348:1278-materialsymbol"
                          w="41px"
                          borderRadius="20px"
                        />
                      </Flex>
                      <Flex justifyContent="center" w="auto">
                        <Text
                          size="md"
                          color="white.A700"
                          fontSize="13.64px"
                          bg="red.300"
                          w="70px"
                          justifyContent="center"
                          display="flex"
                          alignItems="center"
                          h="27px"
                          px="20px"
                          py="3px"
                        >
                          New
                        </Text>
                      </Flex>
                    </Flex>
                    <Image
                      src="images/products-img/img_eyelinear_image_176x77.png"
                      mt="-9px"
                      w={{ md: "27%", base: "100%" }}
                      h="auto"
                    />
                  </Flex>
                </Flex>
                <Text
                  size="xs"
                  color="red.300"
                  mt="38px"
                  letterSpacing="1.50px"
                  textTransform="uppercase"
                  textAlign="right"
                  fontSize="9.97px"
                >
                  liplose
                </Text>
                <Text
                  mt="1px"
                  fontFamily="Times New Roman"
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                >
                  pink liplose
                </Text>
                <Text
                  mt="4px"
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
                <Flex
                  mt="57px"
                  w={{ md: "92%", base: "100%" }}
                  justifyContent="space-between"
                  alignItems="center"
                >

                   
                    <Flex w="60%">
              <Button fontWeight={300} w="100%" gap={3} alignItems={'center'} borderRadius="22px">
                
              <Text
                      // size="s"
                      fontSize={'15px'}
                      color="black.900"
                      // whiteSpace={'nowrap'}  
                      // ml="11px"
                      textTransform="uppercase"
                      fontWeight={500}
                    >
                      Add to cart
                    </Text>
                <Image
                        src="images/products-img/img_iconoir_add_to_cart.svg"
                        h="25px"
                        mt="-2px"
                        w="25px"
                      />
              </Button>
            </Flex>
                  <Flex
                    gap="2px"
                    w="23%"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Text
                      size="s"
                      fontSize={'15px'}
                      whiteSpace={"nowrap"}
                      color="gray.500_01"
                      textTransform="uppercase"
                    >
                      Quick view
                    </Text>
                    <Box h="1px" bg="gray.500_01" w="97%" />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex w="100%" flexDirection="column" alignItems="center">
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  px="56px"
                  py="59px"
                  p="20px"
                >
                  <Image
                    src="images/products-img/img_eyelinear_image_221x123.png"
                    w={{ md: "63%", base: "100%" }}
                    h="auto"
                  />
                </Flex>
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex w="100%" flexDirection="column" alignItems="center">
                <Flex
                  gap="17px"
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  p="11px"
                >
                  <Flex
                    mt="3px"
                    w={{ md: "25%", base: "100%" }}
                    justifyContent="flex-end"
                  >
                    <Text
                      size="md"
                      color="white.A700"
                      fontSize="13.64px"
                      bg="red.300"
                      w="70px"
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                      h="27px"
                      px="20px"
                      py="3px"
                    >
                      New
                    </Text>
                  </Flex>
                  <Image
                    src="images/products-img/img_eyelinear_image_1.png"
                    mb="48px"
                    w={{ md: "43%", base: "100%" }}
                    h="auto"
                  />
                </Flex>
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                gap="17px"
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="15px"
              >
                <Flex w={{ md: "25%", base: "100%" }} justifyContent="flex-end">
                  <Text
                    size="md"
                    color="white.A700"
                    fontSize="13.64px"
                    bg="red.300"
                    w="70px"
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    h="27px"
                    px="20px"
                    py="3px"
                  >
                    New
                  </Text>
                </Flex>
                <Image
                  src="images/products-img/img_eyelinear_image_2.png"
                  mb="44px"
                  w={{ md: "44%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                px="56px"
                py="59px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image.png"
                  w={{ md: "63%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                px="56px"
                py="59px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image_3.png"
                  w={{ md: "63%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                px="56px"
                py="59px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image_4.png"
                  w={{ md: "63%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                px="56px"
                py="59px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image_5.png"
                  w={{ md: "63%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                alignItems="center"
                px="56px"
                py="59px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image_6.png"
                  w={{ md: "63%", base: "100%" }}
                  h="auto"
                />
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Flex w="100%" flexDirection="column" alignItems="center">
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  px="56px"
                  py="60px"
                  p="20px"
                >
                  <Image
                    src="images/products-img/img_eyelinear_image_222x180.png"
                    w={{ md: "91%", base: "100%" }}
                    h="auto"
                  />
                </Flex>
              </Flex>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="12px"
              w="100%"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              _hover={{ boxShadow: "xs" }}
            >
              <Center
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                flexDirection="column"
                px="56px"
                py="58px"
                p="20px"
              >
                <Image
                  src="images/products-img/img_eyelinear_image_222x194.png"
                  mb="2px"
                  w={{ md: "98%", base: "100%" }}
                  h="auto"
                />
              </Center>
              <Flex
                gap="9px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="center"
              >
                <Flex
                  gap="1px"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Text
                    size="xs"
                    color="red.300"
                    letterSpacing="1.50px"
                    textTransform="uppercase"
                    textAlign="right"
                    fontSize="9.97px"
                  >
                    liplose
                  </Text>
                  <Text
                    fontFamily="Times New Roman"
                    textTransform="uppercase"
                    textAlign="center"
                    fontSize="14.96px"
                  >
                    pink liplose
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  textAlign="center"
                  fontSize="14.96px"
                  fontWeight={300}
                >
                  $30.00
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid> 
          */}

{/* Simple Grid with map */}
<SimpleGrid
      mt={10}
      w="100%"
      gap={{ md: "41px", base: "20px" }}
      columns={{ md: 3, base: 1, sm: 2 }}
      justifyContent="center"
    >
      {products.map((product, index) => (
        <Flex
          key={index}
          gap="12px"
          w="100%"
          cursor="pointer"
          flexDirection="column"
          alignItems="center"
          _hover={{ boxShadow: "xs" }}
        >
          <Flex w="100%" flexDirection="column" alignItems="center">
            <Flex
              gap="22px"
              bg="white.A700"
              boxShadow="xs"
              w="100%"
              flexDirection="column"
              alignItems="center"
              p="10px"
            >
              {product.isNew && (
                <>
                  <Flex justifyContent={"space-between"}   w={{ md: "100%", base: "100%" }}>

                    <div>
                  <IconButton
                    size="xs"
                    variant="fill"
                    colorScheme="gray_200"
                    icon={
                      <Image src="images/products-img/img_mdi_heart_outline.svg" />
                    }
                    aria-label="348:1270-mdiheart_one"
                    w="auto"
                    borderRadius="20px"
                  />
                  <IconButton
                    size="xs"
                    variant="fill"
                    colorScheme="gray_200"
                    icon={<Image src="images/products-img/img_material_symbol.svg" />}
                    aria-label="348:1278-materialsymbol"
                    w="auto"
                    borderRadius="20px"
                  />
</div>
                   <Flex
                  // w={{ md: "25%", base: "100%" }}
                  // justifyContent="flex-end"
                >
                  <Text
                    size="md"
                    color="white.A700"
                    fontSize="13.64px"
                    bg="red.300"
                    w="70px"
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    h="27px"
                    px="20px"
                    py="3px"
                  >
                    New
                  </Text>
                </Flex>
                </Flex>
               
                </>
              )}
              <Image
                src={product.imageSrc}
                mb="49px"
                w={{ md: "43%", base: "100%" }}
                h="auto"
              />
            </Flex>
          </Flex>
          <Flex
            gap="9px"
            w={{ md: "37%", base: "100%" }}
            flexDirection="column"
            alignItems="center"
          >
            <Flex
              gap="1px"
              w="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                size="xs"
                color="red.300"
                letterSpacing="1.50px"
                textTransform="uppercase"
                textAlign="right"
                fontSize="9.97px"
              >
                {product.category}
              </Text>
              <Text
                fontFamily="Times New Roman"
                textTransform="uppercase"
                textAlign="center"
                fontSize="14.96px"
              >
                {product.title}
              </Text>
            </Flex>
            <Text
              textTransform="uppercase"
              textAlign="center"
              fontSize="14.96px"
              fontWeight={300}
            >
              {product.price}
            </Text>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>


          <Flex gap="5px" mb={'10vw'} w={{ md: "15%", base: "100%" } }>
            <Text
              size="4xl"
              h="46px"
              color="white.A700"
              letterSpacing="4.86px"
              textTransform="uppercase"
              fontSize="20.23px"
              fontWeight={300}
              bg="red.300"
              w="46px"
              justifyContent="center"
              display="flex"
              alignItems="center"
              textAlign="center"
              borderRadius="50%"
            >
              1
            </Text>
            <Text
              size="4xl"
              h="46px"
              color="black.900"
              letterSpacing="4.86px"
              textTransform="uppercase"
              fontSize="20.23px"
              fontWeight={300}
              bg="blue_gray.100_63"
              w="46px"
              justifyContent="center"
              display="flex"
              alignItems="center"
              textAlign="center"
              borderRadius="50%"
            >
              2
            </Text>
            <IconButton
              size="md"
              variant="fill"
              colorScheme="blue_gray_100_63"
              icon={<Image src="images/products-img/img_group_232.svg" />}
              aria-label="348:1415-iconbutton"
              w="46px"
              borderRadius="50%"
            />
          
          </Flex>
        </Flex>
      </Container>




      
    </Box>
  );
};

export default Shop;
