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

const randomId = () => crypto.randomUUID();

//@ multiple arrays

const languagesArray = [
  { id: randomId, name: "हिंदी - hi" },
  { id: randomId, name: "తెలుగు - te" },
  { id: randomId, name: "தமிழ் - ta" },
  { id: randomId, name: "தமிழ் - ta" },
  { id: randomId, name: "ಕನ್ನಡ - kn" },
  { id: randomId, name: "മാല്യം - ml" },
  { id: randomId, name: "বাংলা - bn" },
  { id: randomId, name: "मराठी - mr" },
];

const yourLists = [
  { id: randomId, name: "create a wish list" },
  { id: randomId, name: "wish from any website" },
  { id: randomId, name: "baby wishlist" },
  { id: randomId, name: "discover your style" },
  { id: randomId, name: "explore showroom" },
];

const yourAccount = [
  { id: randomId, name: "your account" },
  { id: randomId, name: "your orders" },
  { id: randomId, name: "your wishlist" },
  { id: randomId, name: "your recommendation" },
  { id: randomId, name: "your prime membership" },
  { id: randomId, name: "your prime video" },
  { id: randomId, name: "your subscribe and save items" },
  { id: randomId, name: "membership and subscriptions " },
  { id: randomId, name: "your seller account" },
  { id: randomId, name: "manage your content and devices" },
  { id: randomId, name: "your free amazon buisness account " },
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
    <>
      {/* //# languages  */}
      <HStack
        width={"75px"}
        spacing={0}
        mt={2}
        py={3}
        px={2}
        _hover={{ outline: "1px solid white" }}
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
            top={"19px"}
            right={"323px"}
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
        _hover={{ outline: "1px solid white" }}
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
          <MenuList color={"black"} p={0} w={"500px"}>
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
        _hover={{ outline: "1px solid white" }}
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
      <HStack id="right" spacing={0} width={"78px"} pos={"relative"}>
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
    </>
  );
};

export default NavbarRight;
