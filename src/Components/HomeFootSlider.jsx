import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import message from "../../public/images/home-img/message.png";


const HomeFootSlider = () => {
    const [active, setActive] = useState(0);

    const messageText = [
        {
            headingA: "What Our Client Say",
            Text: "I'm absolutely in love with EtherealElegance's skincare products!",
            headingB: "- Sarah M"
        },
        {
            headingA: "What Our Client wants",
            Text: "I'm absolutely in love with EtherealElegance's skincare products! They've completely!",
            headingB: "- Sarah l"
        },
        {
            headingA: "What Our Client have to",
            Text: "I'm absolutely in love with EtherealElegance's skincare products! They've completely transformed my skin, leaving it radiant and glowing. Couldn't recommend them enough!",
            headingB: "- Sarah c"
        }
    ];

    setTimeout(()=>{
        
        if(active === 0){
            setActive(1)
        }else if(active === 1){
            setActive(2)
        }else if(active === 2){
            setActive(0)
        }

    },5000)

    return (
        <>
            <Box
                position="absolute"
                top="35%"
                left={{ base: "50%", md: "70%" }} 
                transform="translate(-50%, -50%)" 
                width={{ base: "80%", md: "350px" }} 
                height={{ base: "210px", md: "260px" }} 
                bg="white"
                p={3}
            >
                <Box position={"relative"}>

                    <Box position={"absolute"} my={{ base: 3, md: 10 }} mx={2}>
                        {
                            messageText.map((ele, ind) => {
                                if (active === ind) {
                                    return (
                                        <Box
                                            key={ind}
                                            display={"flex"}
                                            justifyContent={"center"}
                                            gap={'5'}
                                            flexDir={"column"}
                                        >
                                            <Heading
                                                fontSize={'medium'}
                                            >
                                                {ele.headingA}
                                            </Heading>
                                            <Text
                                                fontSize={'smaller'}
                                                color={'gray'}
                                            >
                                                {ele.Text}
                                            </Text>
                                            <Heading
                                                fontSize={'medium'}
                                            >
                                                {ele.headingB}
                                            </Heading>
                                        </Box>
                                    )
                                }
                                return null; 
                            })
                        }
                    </Box>

                    <Box position={"absolute"}>
                        <Image src={message} />
                    </Box>

                    <Box
                        position={'absolute'}
                        top={'200'}
                        right={'10'}
                        display={'flex'}
                    >
                        {
                            messageText.map((ele, ind) => (
                                <Box
                                    key={ind}
                                    border={`${active === ind ? '1px' : "none"}`}
                                    display={'flex'}
                                    gap={'2'}
                                    rounded={'full'}
                                    p={'0.5'}
                                    onClick={() => setActive(ind)} 
                                >
                                    <Box
                                        rounded={'full'}
                                        p={'1'}
                                        bg={'black'}
                                    >
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomeFootSlider;
