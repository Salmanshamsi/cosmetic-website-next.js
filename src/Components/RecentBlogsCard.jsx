'use client'
import React from 'react'
import {Box, Text, AbsoluteCenter,Divider,Button} from "@chakra-ui/react"
import Image from 'next/image'


const RecentBlogsCard = ({head,title,img}) => {
  return (
    <Box
        h={'auto'}
        w={{base:"full",md:'35%'}}
    >
        <Box 
        h={'25vh'} >
            <Image
            src={img}  />
        </Box>
        <Box position='relative' padding='5'>
            <Divider border={'1px'} borderColor={'pink'}  />
            <AbsoluteCenter
             color={'pink'}
             fontSize={'small'}
             fontStyle={'italic'}
             bg='white' px='4'>
                November 2024
            </AbsoluteCenter>
          </Box>
            <Text
            fontWeight={'bold'}
            fontSize={'small'}
            p={'5px'}
            >
                {head}
            </Text> 
            <Text
                fontSize={'small'}
                p={'5px'}
            >
                {title}
            </Text>
            <Button
                   my={'8px'}
                   mx={'10px'}
                   w={'25%'}
                    color={'gray'}
                    borderColor={'gray'}
                    fontSize={'small'}
                    rounded={0}
                    borderBottom={'1px'}
                    bg={'transparent'}
                >
                    READ MORE
            </Button>
    </Box>
  )
}

export default RecentBlogsCard