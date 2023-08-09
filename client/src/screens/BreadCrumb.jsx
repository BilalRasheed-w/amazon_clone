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



const AllMenus1 = [
  { id: 1, name: "amazon miniTV" },
  { id: 2, name: "sell" },
  { id: 3, name: "best sellers" },
  { id: 4, name: "today's deals" },
  { id: 5, name: "mobiles" },
  { id: 6, name: "new releases" },
  { id: 7, name: "customer service" },
];
const AllMenus2 = [
  { id: 8, name: "electronics" },
  { id: 9, name: "home & kitchen" },
  { id: 10, name: "fashion" },
  { id: 12, name: "gift ideas" },
  { id: 13, name: "amazon pay" },
];

const BreadCrumb = () => {
  return (
    <HStack
      w={"100vw"}
      bg={"#0d1116"}
      px={2}
      py={1}
      color={"white"}
      justifyContent={"space-between"}
    >
      <DrawerMenu />
      {AllMenus1.map((item) => (
        <Text
          textTransform={"capitalize"}
          key={item.id}
          py={1}
          px={1}
          fontSize={"sm"}
          _hover={{ outline: "1px solid white", rounded: "sm" }}
        >
          {item.name}
        </Text>
      ))}
      <HStack
        pos={"relative"}
        justifyContent={"space-between"}
        _hover={{ outline: "1px solid white", rounded: "sm" }}
        px={1}
        pe={4}
      >
        <Text>Prime</Text>
        <Menu>
          <MenuButton
            as={TriangleDownIcon}
            fontSize={"9px"}
            pos={"absolute"}
            top={"10px"}
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
        <Text
          py={1}
          px={1}
          textTransform={"capitalize"}
          key={item.id}
          fontSize={"sm"}
          _hover={{ outline: "1px solid white", rounded: "sm" }}
        >
          {item.name}
        </Text>
      ))}
    </HStack>
  );
};

export default BreadCrumb;
