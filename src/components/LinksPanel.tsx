import { Center, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiZenn, SiQiita, SiHatenabookmark } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import React from "react";
const LinksPanel = () => {
  return (
    <>
      <Center h="100%">
        <Heading size="3xl">
          Links
        </Heading>
      </Center>
      <Flex justify='center' gap='6'>
      <IconButton>
        <a href="https://zenn.dev/jiroken">
          <SiZenn />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://qiita.com/Jiroken">
          <SiQiita />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://github.com/Kenjiro56">
          <FaGithub />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://jackmer.hatenablog.com/">
          <SiHatenabookmark />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://twitter.com/r0se6K">
          <FaSquareXTwitter />
        </a>
      </IconButton>
  </Flex>
    </>
  );
};
export default LinksPanel;
