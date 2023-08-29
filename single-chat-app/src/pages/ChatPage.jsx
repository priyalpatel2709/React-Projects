import React, { useState, useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <>
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Flex
          justifyContent="space-between"
          width="100%"
          height="91.5vh"
          padding="10px"
          flexDirection="row"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Flex>
      </div>
    </>
  );
};

export default ChatPage;
