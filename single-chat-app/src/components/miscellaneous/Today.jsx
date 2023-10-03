import React from "react";
import { Text } from "@chakra-ui/react";
import { Divider, Box, Center } from "@chakra-ui/react";

const Today = ({  m, i, temp }) => {
  const uniqueElements = [...new Set(temp)];

  const indexMap = {};

  uniqueElements.forEach((element) => {
    const index = temp.indexOf(element);
    if (index !== -1) {
      indexMap[element] = index;
    }
  });

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const mcreatedAtDate = m.createdAt.slice(0, 10);

  const value = indexMap[mcreatedAtDate];

//   console.log("Value for key", mcreatedAtDate, "is", value);

  const returnDarte = () => {
    const cuttentDate = getCurrentDate();
    if (cuttentDate === mcreatedAtDate) {
      return "Today";
    } else {
      return mcreatedAtDate;
    }
  };

  return value === i ? (
    <>
      <Text ml="5px" fontSize="sm" textAlign="center" color="gray.500">
        {returnDarte()}
      </Text>
    </>
  ) : null;
};

export default Today;
