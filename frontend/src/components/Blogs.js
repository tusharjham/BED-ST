import { Box, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogUi from "./BlogUi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/getAllPosts");
      setBlogs(data);
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
      border="5px solid blue"
    >
      {blogs.map((x) => {
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
