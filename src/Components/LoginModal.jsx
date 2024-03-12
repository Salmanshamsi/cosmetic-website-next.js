import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
  Button,
  Input,
  ListItem,
  List,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import Image from "next/image"
import girl from "../../public/images/login-img/girl.png"
import jewe from "../../public/images/login-img/jewe.png"
import lipistic from "../../public/images/login-img/lipistic.png"
import leaf from "../../public/images/login-img/leaf.png"
import texture from "../../public/images/login-img/texture.png"
import { FaFacebookF, FaMailBulk, FaTwitter } from "react-icons/fa";

function LoginModal({ customIsOpen, customOnOpen, customOnClose }) {
  return (
    <Modal
      isCentered
      size={'6xl'}
      blockScrollOnMount={false}
      isOpen={customIsOpen}
      onClose={customOnClose}
    >
      <ModalOverlay />
      <ModalContent
        m={'4'}
        h={{base:"60vh",md:'80vh'}}
        position={'relative'}
      >
        <ModalCloseButton
        zIndex={'10'}
        />
        <Box
          position={'absolute'}

        >
          <Image width={'200'} src={texture} />
        </Box>
        <Box
        h={'full'}
        display={'flex'}
        >
            <Box
              w={'full'}
              h={'full'}
              display={'flex'}
              position={'relative'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'6'}
              >
                <Text
                  borderBottom={'2px'}
                  p={'2'}
                  fontWeight={'bold'}
                  fontSize={{base:"13px",md:"15px"}}
                  borderColor={'red'}
                  w={'23%'}
                >
                  Login
                </Text>
                <Input border={'1px'} rounded={0} placeholder={"email"}  />
                <Input border={'1px'} rounded={0} placeholder={"password"}  />
                <Box
                  w={'full'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                <Checkbox size='sm' colorScheme='gray'>
                  remember me
                </Checkbox>
                <Text
                color={'red'}
                >
                  Forget password
                </Text>
                </Box>
                  <Box
                  display={'flex'}
                  justifyContent={'end'}
                  >
                  <Button
                    bg={'black'}
                    color={'white'}
                    fontSize={'small'}
                    p={'4'}
                    rounded={0}
                    >login</Button>
                  </Box>
                <Text
                  textAlign={'center'}
                  p={'2'}
                  color={'gray'}
                >
                  OR
                </Text>
                <Box>
                  <List
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'4'}
                  >
                    <ListItem>
                      <Button
                      rounded={'full'}
                      bg={'black'}
                      color={'white'}
                      ><FaFacebookF/></Button>
                    </ListItem>
                    <ListItem>
                    <Button
                      rounded={'full'}
                      bg={'black'}
                      color={'white'}
                      ><FaTwitter/></Button>
                    </ListItem>
                    <ListItem>
                    <Button
                      rounded={'full'}
                      bg={'black'}
                      color={'white'}
                      ><FaMailBulk/></Button>
                    </ListItem>
                  </List>
                </Box>
                <Text
                textAlign={'center'}
                >
                  Don’t have an account ? <span style={{color:"red"}} >SIGN UP</span>
                </Text>
              </Box>
            </Box>
            <Box
              display={{base:"none",md:"inline"}}
              w={'full'}
              h={'full'}
              bg={'#F5F5F5'}
              position={'relative'}
            >
              <Box
                position={'absolute'}
                right={'0'}
              >
                <Image src={lipistic} />
              </Box>
              <Box
                position={'absolute'}
                left={'0'}
                top={'16'}
              >
                <Image src={leaf} />
              </Box>
              <Box
              zIndex={'2'}
                position={'absolute'}
                right={'6'}
                bottom={'80'}
              >
                <Image src={jewe} />
              </Box>
              <Box
                zIndex={'2'}
                position={'absolute'}
                left={'16'}
                top={'80'}
              >
                <Image 
                width={'30'}
                src={jewe} />
              </Box>
              <Box
                position={'absolute'}
                right={'10'}
                bottom={'0'}
              >
                <Image 
                width={'450'}
                src={girl} />
              </Box>
            </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
