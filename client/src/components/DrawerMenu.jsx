import {
  Button,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerContent,
  DrawerOverlay,
  Icon,
  HStack,
  Text,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";

const randomId = () => crypto.randomUUID();
const array1 = [
  { id: randomId, name: "best sellers" },
  { id: randomId, name: "best sellers" },
  { id: randomId, name: "movers and shakers" },
];
const array2 = [
  { id: randomId, name: "echo & alexa" },
  { id: randomId, name: "fire tv" },
  { id: randomId, name: "kindle e-readers % ebooks" },
  { id: randomId, name: "audible audiobooks" },
  { id: randomId, name: "amazon prime video" },
  { id: randomId, name: "amazon prime music" },
];
const array3 = [
  { id: randomId, name: "mobiles, computers" },
  { id: randomId, name: "tv,appliances.electronics" },
  { id: randomId, name: "men's fashion" },
  { id: randomId, name: "women's fashion" },
  { id: randomId, name: "see all" },
];
const array4 = [
  { id: randomId, name: "Gift Cards & Mobile Recharges" },
  { id: randomId, name: "Amazon Launchpad" },
  { id: randomId, name: "Flight Tickets" },
  { id: randomId, name: "Clearance store" },
];
const array5 = [
  { id: randomId, name: "Your Account" },
  { id: randomId, name: "Customer Service" },
  { id: randomId, name: "Sign in" },
];

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        spacing={"1px"}
        px={2}
        py={2}
        onClick={onOpen}
        cursor={"pointer"}
        _hover={{ outline: "1px solid white", rounded: "sm" }}
      >
        <Icon as={HamburgerIcon} fontWeight={"bold"} fontSize={"2xl"} />
        <Text ms={1} fontSize={"md"}>
          All
        </Text>
      </HStack>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent maxWidth={"33%"} pb={8}>
          <HStack
            bg={"#0d1116"}
            color={"white"}
            py={2}
            px={8}
            cursor={"pointer"}
          >
            <Icon as={CgProfile} fontSize={"3xl"} />
            <Heading py={2} fontSize={"xl"}>
              Hello ,sign in
            </Heading>
          </HStack>
          <DrawerBody>
            <VStack alignItems={"flex-start"} px={2}>
              {/* 1st array */}
              <Heading py={2} fontSize={"lg"}>
                Trending
              </Heading>
              {array1.map((item) => (
                <HStack key={item.id} w={"full"}>
                  <Text
                    cursor={"pointer"}
                    w={"full"}
                    py={2}
                    px={2}
                    _hover={{ bg: "gray.200", rounded: "md" }}
                    fontSize={"md"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                </HStack>
              ))}
              <Divider />

              {/* 2nd array */}
              <Heading py={2} fontSize={"lg"}>
                Digital content and devices
              </Heading>
              {array2.map((item) => (
                <HStack
                  _hover={{ bg: "gray.200", rounded: "md" }}
                  key={item.id}
                  w={"full"}
                  justifyContent={"space-between"}
                  cursor={"pointer"}
                >
                  <Text
                    w={"full"}
                    py={2}
                    px={2}
                    fontSize={"md"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                  <Icon as={ChevronRightIcon} />
                </HStack>
              ))}
              <Divider />

              {/* 3st array */}
              <Heading py={2} fontSize={"lg"}>
                Shop By Category
              </Heading>
              {array3.map((item) => (
                <HStack
                  _hover={{ bg: "gray.200", rounded: "md" }}
                  key={item.id}
                  w={"full"}
                  justifyContent={"space-between"}
                  cursor={"pointer"}
                >
                  <Text
                    w={"full"}
                    py={2}
                    px={2}
                    fontSize={"md"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                  <Icon as={ChevronRightIcon} />
                </HStack>
              ))}
              <Divider />

              {/* 4st array */}
              <Heading py={2} fontSize={"lg"}>
                Programs & Features
              </Heading>
              {array4.map((item) => (
                <HStack
                  _hover={{ bg: "gray.200", rounded: "md" }}
                  key={item.id}
                  w={"full"}
                  justifyContent={"space-between"}
                  cursor={"pointer"}
                >
                  <Text
                    w={"full"}
                    py={2}
                    px={2}
                    fontSize={"md"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                  <Icon as={ChevronRightIcon} />
                </HStack>
              ))}
              <Divider />
              {/* 5st array */}
              <Heading py={2} fontSize={"lg"}>
                Help & Settings
              </Heading>
              {array5.map((item) => (
                <HStack
                  _hover={{ bg: "gray.200", rounded: "md" }}
                  key={item.id}
                  w={"full"}
                  justifyContent={"space-between"}
                  cursor={"pointer"}
                >
                  <Text
                    w={"full"}
                    py={2}
                    px={2}
                    fontSize={"md"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                  <Icon as={ChevronRightIcon} />
                </HStack>
              ))}
              <Divider />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
