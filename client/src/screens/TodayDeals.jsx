import {
  Badge,
  Button,
  HStack,
  Heading,
  Icon,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// const <Heading></Heading>
// const <Text></Text>

import img1 from "/images/today's deals/1.jpg";
import img2 from "/images/today's deals/2.jpg";
import img3 from "/images/today's deals/3.jpg";
import img4 from "/images/today's deals/4.jpg";
import img5 from "/images/today's deals/5.jpg";
import img6 from "/images/today's deals/6.jpg";
import img7 from "/images/today's deals/7.jpg";
import img8 from "/images/today's deals/8.jpg";
import img9 from "/images/today's deals/9.jpg";
import img10 from "/images/today's deals/10.jpg";
import img11 from "/images/today's deals/11.jpg";
import img12 from "/images/today's deals/12.jpg";
import img13 from "/images/today's deals/13.jpg";
import img14 from "/images/today's deals/14.jpg";
// import img15 from "/images/today's deals/15.jpg";

const randomId = () => crypto.randomUUID();

const array1 = [
  {
    id: randomId(),
    img: img1,
    dis: 60,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img2,
    dis: 60,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img3,
    dis: 53,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img4,
    dis: 68,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img5,
    dis: 25,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img6,
    dis: 68,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img7,
    dis: 78,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img8,
    dis: 57,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img9,
    dis: 31,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img10,
    dis: 77,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img11,
    dis: 52,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img12,
    dis: 70,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img13,
    dis: 60,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
  {
    id: randomId(),
    img: img14,
    dis: 67,
    text: "Lorem ipsum, dolor sit amet consectetur  elit. Labore, minus",
  },
];

const TodayDeals = () => {
  return (
    <Stack
      mx={"5"}
      p={6}
      bgColor={"white"}
      height={"50vh"}
      alignItems={"start"}
      overflowX={"scroll"}
    >
      <VStack alignItems={"flex-start"}>
        <HStack alignItems={"end"}>
          <Heading fontSize={"2xl"}>Today's deals</Heading>
          <Text ms={"3"} color={"blue"}>
            see all deals
          </Text>
        </HStack>
        {/* //!                                                                                                         */}

        <HStack spacing={2} mt={4}>
          {array1.map((item) => (
            <VStack
              key={item.id}
              w={"250px"}
              alignItems={"flex-start"}
              bg={"#f7f8f8"}
            >
              <Img
                h={"150px"}
                width={"150px"}
                src={item.img}
                alignSelf={"center"}
                objectFit={"contain"}
              />
              <HStack>
                <Badge
                  bg={"red.700"}
                  fontWeight={"semi-bold"}
                  color={"white"}
                  textTransform={"capitalize"}
                >
                  upto {item.dis}% off
                </Badge>
                <Text color={"red.700"} fontWeight={"bold"} fontSize={"sm"}>
                  Deal of the Day
                </Text>
              </HStack>
              <Text fontSize={"sm"} noOfLines={1}>
                Lorem ipsum dolor, sit amet consectetur !
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Stack>
  );
};

export default TodayDeals;
