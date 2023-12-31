import {
  Divider,
  HStack,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
  VStack,
  Button,
  Radio,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

//@ multiple arrays

const languagesArray = [
  { id: 1, name: "हिंदी - hi" },
  { id: 2, name: "తెలుగు - te" },
  { id: 3, name: "தமிழ் - ta" },
  { id: 4, name: "தமிழ் - ta" },
  { id: 5, name: "ಕನ್ನಡ - kn" },
  { id: 6, name: "മാല്യം - ml" },
  { id: 7, name: "বাংলা - bn" },
  { id: 8, name: "मराठी - mr" },
];

const yourLists = [
  { id: 9, name: "create a wish list" },
  { id: 10, name: "wish from any website" },
  { id: 11, name: "baby wishlist" },
  { id: 12, name: "discover your style" },
  { id: 13, name: "explore showroom" },
];

const yourAccount = [
  { id: 1, name: "your orders" },
  { id: 2, name: "your account" },
  { id: 3, name: "your wishlist" },
  { id: 4, name: "your recommendation" },
  { id: 5, name: "your prime membership" },
  { id: 6, name: "your prime video" },
  { id: 7, name: "your subscribe and save items" },
  { id: 8, name: "membership and subscriptions " },
  { id: 9, name: "your seller account" },
  { id: 10, name: "manage your content and devices" },
  { id: 11, name: "your free amazon buisness account " },
];

// @  styling components

const OptionsStyled = ({ name }) => (
  <Text
    textTransform={"capitalize"}
    fontSize={"sm"}
    _hover={{
      color: "yellow.500",
      textDecoration: "underline",
    }}
  >
    {name}
  </Text>
);

const Language = ({ name }) => (
  <HStack
    _hover={{
      color: "yellow.500",
    }}
  >
    <Radio colorScheme="red" value={name} />
    <Text textTransform={"uppercase"} fontSize={"13px"}>
      {name}
    </Text>
  </HStack>
);

const NavbarRight = () => {
  return (
    <HStack>
      {/* //# languages  */}
      <HStack
        width={"75px"}
        spacing={0}
        mt={2}
        py={3}
        px={2}
        pos={"relative"}
        _hover={{ outline: "1px solid white", rounded: "sm" }}
      >
        <Img h={"17px"} w={"25px"} bg={"red"} />
        <Text
          fontSize={"14px"}
          letterSpacing={"tighter"}
          fontWeight={"bold"}
          ml={"4px"}
          mt={1}
        >
          EN
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<TriangleDownIcon fontSize={"8px"} />}
            bg={"transparent"}
            color={"white"}
            variant={"unstyled"}
            pos={"absolute"}
            top={"7px"}
            right={"-3px"}
          ></MenuButton>
          <MenuList color={"black"}>
            <VStack alignItems={"flex-start"} px={"20px"}>
              <HStack py={2}>
                <Radio />
                <Text>English-En</Text>
              </HStack>
              <Divider />
              {languagesArray.map((item) => (
                <VStack key={item.id}>
                  <Language name={item.name} />
                </VStack>
              ))}
              <Text my={1} paddingLeft={"23px"} color={"blue"}>
                Learn more
              </Text>
              <Divider />
              <HStack>
                <Img bg={"red"} h={"15px"} w={"25px"} />
                <Text fontSize={"13px"} textTransform={"capitalize"}>
                  you are shopping in amazon.in
                </Text>
              </HStack>
              <Text
                alignSelf={"center"}
                fontSize={"13px"}
                textTransform={"capitalize"}
                color={"blue"}
              >
                change your country/region
              </Text>
            </VStack>
          </MenuList>
        </Menu>
      </HStack>

      {/* //# accounts and lists */}
      <HStack
        width={"130px"}
        mt={1}
        py={3}
        px={1}
        pos={"relative"}
        _hover={{ outline: "1px solid white", rounded: "sm" }}
      >
        <Text pos={"absolute"} fontSize={"12px"} top={"8px"} right={"61px"}>
          Hello,sign in
        </Text>
        <Text fontSize={"14px"} fontWeight={"bold"} mt={2}>
          Account & Lists
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<TriangleDownIcon fontSize={"8px"} />}
            bg={"transparent"}
            color={"white"}
            variant={"unstyled"}
            pos={"absolute"}
            top={"11px"}
            left={"93px"}
          >
            <HStack spacing={1}></HStack>
          </MenuButton>
          <MenuList
            color={"black"}
            p={0}
            position={"absolute"}
            top={"-5px"}
            left={"-350px"}
            w={"500px"}
          >
            <VStack spacing={0} py={2}>
              <Button bg={"#97800a"} fontWeight={"600"} width={"200px"}>
                Sign In
              </Button>
              <Text fontSize={"sm"}>New customer? Start here</Text>
            </VStack>
            <Divider />
            <HStack
              w={"full"}
              alignItems={"self-start"}
              py={"15px"}
              px={"20px"}
            >
              <VStack w={"50%"} alignItems={"flex-start"} spacing={1}>
                <Heading fontSize={"md"}>Your Lists</Heading>
                {yourLists.map((item) => (
                  <VStack key={item.id}>
                    <OptionsStyled name={item.name} />
                  </VStack>
                ))}
              </VStack>

              <VStack
                w={"50%"}
                alignItems={"flex-start"}
                spacing={1}
                pr={"20px"}
              >
                <Heading fontSize={"md"}>Your Accounts</Heading>
                {yourAccount.map((item) => (
                  <VStack key={item.id}>
                    <OptionsStyled name={item.name} />
                  </VStack>
                ))}
              </VStack>
            </HStack>
          </MenuList>
        </Menu>
      </HStack>

      {/* //# returns and orders */}

      <HStack
        py={3}
        pl={"3px"}
        _hover={{ outline: "1px solid white", rounded: "sm" }}
        pos={"relative"}
      >
        <Text pos={"absolute"} fontSize={"12px"} top={"11px"} right={"37px"}>
          Returns
        </Text>
        <Text fontSize={"14px"} fontWeight={"bold"} mt={3} pr={"18px"}>
          & Orders
        </Text>
      </HStack>

      {/* //# cart */}
      <HStack
        id="right"
        spacing={0}
        width={"78px"}
        pos={"relative"}
        _hover={{ outline: "1px solid white" }}
      >
        <Icon as={PiShoppingCartSimpleBold} fontSize={"40px"} />
        <Text fontSize={"14px"} fontWeight={"bold"} mt={3}>
          Cart
        </Text>
        <Text
          fontSize={"md"}
          fontWeight={"bold"}
          mt={3}
          color={"yellow.500"}
          pos={"absolute"}
          top={"-6px"}
          left={"16px"}
        >
          0
        </Text>
      </HStack>
    </HStack>
  );
};

export default NavbarRight;
