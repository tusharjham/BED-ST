import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={2}
      ps={{ base: 4, lg: 10 }}
      pe={{ base: 4, lg: "8%" }}
      bg={"blue.800"}
      boxSizing="border-box"
      position={"fixed"}
      top={0}
      zIndex={100}
    >
      <Box className="logo">
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"whitesmoke"}>
          Football Blog
        </Text>
      </Box>
      {/* button */}
      <Box
        className="menuToggle"
        display={{ base: "block", md: "none" }}
        onClick={toggle}
      >
        {isOpen ? (
          <IoCloseSharp color="whitesmoke" fontSize={"2xl"} />
        ) : (
          <HiMenu color="whitesmoke" fontSize={"2xl"} />
        )}
      </Box>
      {/* Menu Links */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={2}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          color={"whitesmoke"}
        >
          <Link to="/">
            <Text ms={4} fontWeight={"bold"} fontSize={"lg"}>
              Home
            </Text>
          </Link>
          <Link to="/about">
            <Text ms={4} fontWeight={"bold"} fontSize={"lg"}>
              About
            </Text>
          </Link>
          <Link to="/blogs">
            <Text ms={4} fontWeight={"bold"} fontSize={"lg"}>
              Blogs
            </Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Navbar;
