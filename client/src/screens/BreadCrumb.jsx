import React from "react";
import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { DrawerMenu } from "../components/DrawerMenu";

const randomId = () => crypto.randomUUID();

const AllMenus1 = [
  { id: randomId, name: "amazon miniTV" },
  { id: randomId, name: "sell" },
  { id: randomId, name: "best sellers" },
  { id: randomId, name: "today's deals" },
  { id: randomId, name: "mobiles" },
  { id: randomId, name: "new releases" },
  { id: randomId, name: "customer service" },
];
const AllMenus2 = [
  { id: randomId, name: "electronics" },
  { id: randomId, name: "home & kitchen" },
  { id: randomId, name: "fashion" },
  { id: randomId, name: "gift ideas" },
  { id: randomId, name: "amazon pay" },
];

const BreadCrumb = () => {
  return (
    <>
      <HStack
        bg={"#0d1116"}
        color={"white"}
        justifyContent={"space-between"}
        px={2}
        py={1}
      >
        <DrawerMenu />

        {AllMenus1.map((item) => (
          <HStack
            key={item.id}
            _hover={{ outline: "1px solid white", rounded: "sm" }}
            px={1}
            py={2}
            cursor={"pointer"}
          >
            <Text textTransform={"capitalize"} fontSize={"sm"}>
              {item.name}
            </Text>
          </HStack>
        ))}
        <HStack
          pos={"relative"}
          _hover={{ outline: "1px solid white", rounded: "sm" }}
          px={1}
          pe={4}
          py={2}
        >
          <Text>Prime</Text>
          <Menu>
            <MenuButton
              as={TriangleDownIcon}
              fontSize={"9px"}
              pos={"absolute"}
              top={"18px"}
              right={"-1px"}
              me={1}
            />
            <MenuList color={"black"}>
              <Text fontSize={"sm"} px={1}>
                Prime Flyout
              </Text>
            </MenuList>
          </Menu>
        </HStack>
        {AllMenus2.map((item) => (
          <HStack
            key={item.id}
            _hover={{ outline: "1px solid white", rounded: "sm" }}
            px={1}
            py={2}
            cursor={"pointer"}
          >
            <Text textTransform={"capitalize"} fontSize={"sm"}>
              {item.name}
            </Text>
          </HStack>
        ))}
      </HStack>
    </>
  );
};

export default BreadCrumb;
