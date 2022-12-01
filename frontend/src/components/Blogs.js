import { Box, position, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogUi from "./BlogUi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/getAllPosts");
        setBlogs(data.reverse());
      } catch (err) {
        toast({
          title: "Errro",
          description: err,
          status: "error",
          position: "top",
          duration: "9000",
          isClosable: true,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      height={"92vh"}
      width={{ base: "72vw", sm: "65vw", md: "60vw", lg: "55vw" }}
      position={"relative"}
      top={"7vh"}
      p={8}
      overflow={"scroll"}
    >
      {blogs.map((x) => {
        const t = x.createdAt;
        const d = new Date(t);
        return (
          <BlogUi
            key={x._id}
            heading={x.heading}
            content={x.content}
            author={x.author}
          />
        );
      })}
    </Box>
  );
};

export default Blogs;
