import React from "react";
import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CiLocationOn } from "react-icons/ci";
import NavbarRight from "../components/NavbarRight";


const Center = () => (
  <HStack gap={0} id="center" w={"535px"}>
    <Select
      bg={"white"}
      color={"black"}
      rounded={"none"}
      w={"100px"}
      roundedLeft={"md"}
    >
      All
      <option value="">All</option>
      <option value="">1</option>
      <option value="">2</option>
    </Select>
    <Input bg={"white"} placeholder="Search bigDeals.in" rounded={"none"}></Input>
    <Button rounded={"none"} bg={"#dd7e13"} color={"black"} roundedRight={"md"}>
      <SearchIcon />
    </Button>
  </HStack>
);

const Navbar = () => {
  return (
    <HStack
      bg={"#070a0d"}
      color={"white"}
      id="left"
      h={"10vh"}
      px={"10px"}
      justifyContent={"space-between"}
    >
      <Left />
      <Center />
      <NavbarRight />
    </HStack>
  );
};

export default Navbar;



const Left = () => (
  <>
    <HStack
      spacing={0}
      py={3}
      px={2}
      w={"124px"}
      _hover={{ outline: "1px solid white" }}
    >
      <Heading letterSpacing={"tighter"} fontWeight={"600"} fontSize={"2xl"}>
        bigDeals{" "}
      </Heading>
      <Text display={"inline-block"} mt={1} fontSize={"sm"}>
        .in
      </Text>
    </HStack>
    <HStack
      spacing={1}
      px={1}
      py={2}
      w={"165px"}
      pos={"relative"}
      _hover={{
        outline: "1px solid white",
      }}
    >
      <Text fontSize={"xs"} pos={"absolute"} top={"10px"} left={"24px"}>
        Hello
      </Text>
      <Icon as={CiLocationOn} mt={"14px"} strokeWidth={2} />

      <Text mt={"15px"} fontWeight={"600"} fontSize={"sm"}>
        Select Your address
      </Text>
    </HStack>
  </>
);
