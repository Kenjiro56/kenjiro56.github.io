import { Center, Heading, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import React from "react";
const LinksPanel = () => {
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">
          Links
        </Heading>
      </Center>
      <IconButton>
        <a href="https://zenn.dev/jiroken">
        </a>
      </IconButton>
      <IconButton>
        <a href="https://qiita.com/Jiroken">
        </a>
      </IconButton>
      <IconButton>
      <FaGithub />
        <a href="https://github.com/Kenjiro56">
        </a>
      </IconButton>
      <IconButton>
        <a href="https://jackmer.hatenablog.com/">
        </a>
      </IconButton>
      <IconButton>
        <a href="https://twitter.com/r0se6K">
        </a>
      </IconButton>
    </>
  );
};
export default LinksPanel;
