import {
  Container,
  HStack,
  Heading,
  Img,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import img from "/images/offers/clearance.jpg";
import img1 from "/images/offers/1.jpg";
import img2 from "/images/offers/2.jpg";
import img3 from "/images/offers/3.jpg";
import img4 from "/images/offers/4.jpg";
import img5 from "/images/offers/5.jpg";
import img6 from "/images/offers/6.jpg";
import img7 from "/images/offers/7.jpg";
import img8 from "/images/offers/8.jpg";
import img9 from "/images/offers/9.jpg";
import img10 from "/images/offers/10.jpg";
import img11 from "/images/offers/11.jpg";
import img12 from "/images/offers/12.jpg";
import img13 from "/images/offers/13.jpg";
import img14 from "/images/offers/14.jpg";
import img15 from "/images/offers/15.jpg";
import img16 from "/images/offers/16.jpg";
import img17 from "/images/offers/17.jpg";
import img18 from "/images/offers/18.jpg";
import img19 from "/images/offers/19.jpg";
import img20 from "/images/offers/20.jpg";
import img21 from "/images/offers/21.jpg";
import img22 from "/images/offers/22.jpg";
import img23 from "/images/offers/23.jpg";
import img24 from "/images/offers/24.jpg";
import img25 from "/images/offers/25.jpg";
import img26 from "/images/offers/26.jpg";
import img27 from "/images/offers/27.jpg";
import img28 from "/images/offers/28.jpg";
import TodayDeals from "./TodayDeals";

const array1 = [
  { id: "img1", img: img1, text: "Clothing" },
  { id: "img2", img: img2, text: "Footwear" },
  { id: "img3", img: img3, text: "Watches" },
  { id: "img4", img: img4, text: "Bags & luggage" },
];
const array2 = [
  { id: "img5", img: img5, text: "Air conditioners" },
  { id: "img6", img: img6, text: "Refrigerators" },
  { id: "img7", img: img7, text: "Microwaves" },
  { id: "img8", img: img8, text: "Washing machines" },
];
const array3 = [
  { id: "img9", img: img9, text: "Spin mops, wipes & more" },
  { id: "img10", img: img10, text: "Bathroom hardware & accessories" },
  { id: "img11", img: img11, text: "Hammers, screwdrivers & more" },
  { id: "img12", img: img12, text: "Extension boards, plugs & more" },
];
const array5 = [
  { id: "img13", img: img13, text: "Up to ₹5000 off | Flight tickets" },
  { id: "img14", img: img14, text: "Zero gateway fees on trains" },
  { id: "img15", img: img15, text: "Flat 10% off | Bus ticket bookings" },
  { id: "img16", img: img16, text: "Spin & Win" },
];
const array6 = [
  { id: "img17", img: img17, text: "Starting ₹129 | Indoor games" },
  { id: "img18", img: img18, text: "Starting ₹99 | Soft toys" },
  { id: "img19", img: img19, text: "Up to 70% off | Diapers" },
  { id: "img20", img: img20, text: "Up to 60% off | Toys & games" },
];
const array7 = [
  { id: "img21", img: img21, text: "Women's Clothing" },
  { id: "img22", img: img22, text: "Footwear+Handbags" },
  { id: "img23", img: img23, text: "Watches" },
  { id: "img24", img: img24, text: "Fashion jewellery" },
];
const array8 = [
  { id: "img25", img: img25, text: "Cleaning accessories " },
  { id: "img26", img: img26, text: "Tyre & rim care" },
  { id: "img27", img: img27, text: "Helmets" },
  { id: "img28", img: img28, text: "Vacuum cleaner" },
];

const Offers = () => {
  return (
    <>
      <Wrap
        justify={"center"}
        bg={"transparent"}
        spacing={"5"}
        w={"100vw"}
        pos={"absolute"}
        top={"260px"}
      >
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={5}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>Up to 70% off | Clearance store</Heading>
          <Img src={img} h={"250px"} w={"254px"} mt={8} objectFit={"none"} />
          <Text mt={12}>see all offers</Text>
        </WrapItem>
        {/* //! 2nd item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>Up to 60% off | Styles for men</Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            py={5}
            mt={-2}
            h={"310px"}
          >
            {array1.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>

        {/* //! 3rd item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>
            Appliances for your home | Up to 55% off
          </Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            mt={-2}
            py={5}
            h={"310px"}
            // border={'1px'}
          >
            {array3.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>
        {/* //! 4th item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>Sign in for your best experience</Heading>

          <Text mt={5}>see all offers</Text>
        </WrapItem>
        {/* //! 5 item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>Offers on travel tickets</Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            py={5}
            h={"310px"}
            mt={5}
          >
            {array5.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>
        {/* //! 6 item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>
            Starting ₹10 | Baby essentials & toys
          </Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            mt={-2}
            py={5}
            h={"310px"}
          >
            {array6.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>
        {/* //! 7 item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>Up to 60% off | Styles for women</Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            py={5}
            mt={-2}
            h={"310px"}
          >
            {array7.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>
        {/* //! 8 item */}
        <WrapItem
          w={"290px"}
          bg={"white"}
          pt={6}
          pb={3}
          px={4}
          flexDir={"column"}
        >
          <Heading fontSize={"xl"}>
            Automotive essentials | Up to 60% off
          </Heading>
          <HStack
            wrap={"wrap"}
            justifyContent={"space-between"}
            mt={-2}
            py={5}
            h={"310px"}
          >
            {array8.map((item) => (
              <VStack
                key={item.id}
                alignItems={"flex-start"}
                spacing={"0"}
                maxW={"120px"}
              >
                <Img
                  h={"90px"}
                  w={"115px"}
                  src={item.img}
                  bg={"red.300"}
                  objectFit={"cover"}
                />
                <Text mt={1} lineHeight={1} fontSize={"xs"}>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </HStack>
          <Text mt={5}>see all offers</Text>
        </WrapItem>
      </Wrap>
     
    </>
  );
};

export default Offers;
