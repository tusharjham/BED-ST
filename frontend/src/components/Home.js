import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box
      height={"92vh"}
      width={{ base: "72vw", sm: "65vw", md: "60vw", lg: "55vw" }}
      position={"relative"}
      top={"7vh"}
      p={8}
      overflow={"scroll"}
    >
      <Box textAlign={"center"} mb={5}>
        <Text
          fontFamily={"cursive"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight={"bold"}
          color={"black"}
        >
          Home Page
        </Text>
      </Box>
      <Box textAlign={"center"}>
        <Text
          fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "xl" }}
          fontFamily={"cursive"}
          color={"whitesmoke"}
        >
          This is the home page of our website SportsBlog.Here sports fans and
          analysts write Blogs related to their sports.They share wide range of
          informations related about different games and players.To view the
          blogs click on the blog button above.You can also write your own blogs
          there.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
