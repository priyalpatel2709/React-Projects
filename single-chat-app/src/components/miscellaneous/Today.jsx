// Today.js
import React from "react";
import { Text } from "@chakra-ui/react";

const Today = ({ messages, m, i }) => {
  if (i === 0 || messages[i - 1].createdAt.slice(0, 10) !== m.createdAt.slice(0, 10)) {
    return (
      <Text ml="5px" fontSize="sm" textAlign="center" color="gray.500">
        {m.createdAt.slice(0, 10)}
      </Text>
    );
  }
  return null;
};

export default Today;
