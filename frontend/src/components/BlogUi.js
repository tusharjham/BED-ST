import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import React from "react";

const BlogUi = ({ id, heading, content, author }) => {
  return (
    <Card>
      <CardHeader>{heading}</CardHeader>
      <CardBody>{content}</CardBody>
      <CardFooter>{author}</CardFooter>
    </Card>
  );
};

export default BlogUi;
