import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import React from "react";

const BlogUi = ({ id, heading, content, author }) => {
  return (
    <Card bg={"whitesmoke"} mb={2} boxSizing={"border-box"}>
      <CardHeader px={2} py={1} fontWeight={"bold"} fontSize={"lg"}>
        {heading}
      </CardHeader>
      <CardBody fontSize={"lg"} px={2} py={0}>
        {content}
      </CardBody>
      <CardFooter
        pe={5}
        py={1}
        ps={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        fontStyle={"italic"}
        fontFamily={"sm"}
      >
        <div>{author}</div>
      </CardFooter>
    </Card>
  );
};

export default BlogUi;
