import React, { useState, useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    let response = await axios.get("http://localhost:2709/chat-api");
    setChats(response.data);
    // console.log(data);
  };

  useEffect(() => {
    // fetchChat();
  }, []);
  return (
    <>
      <Container maxW="xl" centerContent>
          Chat's        
      </Container>
    </>
  );
};

export default ChatPage;
