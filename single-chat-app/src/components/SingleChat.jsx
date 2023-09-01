import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import { IconButton, Spinner, useToast, Button } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  ArrowBackIcon,
  ArrowRightIcon,
  AttachmentIcon,
} from "@chakra-ui/icons";
import ProfileModal from "./miscellaneous/ProfileModal";
import ScrollableChat from "./ScrollableChat";
import Lottie from "react-lottie";
import animationData from "../animations/typing.json";

import io from "socket.io-client";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
import { ChatState } from "../Context/ChatProvider";
// const ENDPOINT = "https://single-chat-app.onrender.com";
const ENDPOINT = "http://localhost:2709";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `https://single-chat-app.onrender.com/api/message/${selectedChat._id}`,
        config
      );

      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (event) => {
    if (newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "https://single-chat-app.onrender.com/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );
        socket.emit("new message", data);
        console.log("me j 6u");
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: `Failed to send the Message ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
    // eslint-disable-next-line
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
          console.log("me");
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
        // console.log('or mt?',selectedChat);
        console.log("or mt =id?");
      }
    });
  });

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  

  const postDetails = async (pics) => {
    // setPicLoading(true);

    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      // setPicLoading(false);
      return;
    }

    try {
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "Chat-app-user");
        data.append("cloud_name", "dtzrtlyuu");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dtzrtlyuu/image/upload",
          {
            method: "post",
            body: data,
          }
        );

        const responseData = await response.json();
        console.log(responseData.url.toString());
        setNewMessage(responseData.url.toString());
        setSelectedFile(responseData.url.toString());
        // setPic(responseData.url.toString());
        // setPicLoading(false);
      } else {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        // setPicLoading(false);
        return;
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred while uploading the image.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      // setPicLoading(false);
    }
  };

  // console.log('newMessage',newMessage);
  // console.log('msgRead',msgRead);

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {messages &&
              (!selectedChat.isGroupChat ? (
                <>
                  {getSender(user, selectedChat.users)}
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </>
              ) : (
                <>
                  {selectedChat.chatName.toUpperCase()}
                  <UpdateGroupChatModal
                    fetchMessages={fetchMessages}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </>
              ))}
          </Text>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="93%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat
                  messages={messages}
                  fetchMessages={fetchMessages}
                  selectedFile={selectedFile}
                />
              </div>
            )}
            <FormControl
              onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
              id="first-name"
              isRequired
              mt={3}
            >
              {istyping ? (
                <div>
                  <Lottie
                    options={defaultOptions}
                    // height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )}
              <InputGroup>
                <div
                  style={{ width:'95%',display: "flex", alignItems: "center" }}
                >
                  <Input
                    variant="filled"
                    bg="#E0E0E0"
                    placeholder="Enter a message.."
                    value={newMessage}
                    onChange={typingHandler}
                    width="90%"
                    className="message__input"
                  />
                  
                  
                </div>
                {/* <AttachmentIcon w="20px" h="20px" color="gray.500" /> */}
                <InputRightElement width="4.5rem">
                <input
                    type="file"
                    accept="image/*"
                    style={{
                      opacity: 0,
                      width: "50%",
                      cursor: "pointer",
                    }}
                    onChange={(e) => postDetails(e.target.files[0])}
                  />
                <AttachmentIcon
                    w="20px"
                    h="20px"
                    color="gray.500"
                    style={{ marginLeft: "-30px" }}
                  />
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => sendMessage()}
                    variant="ghost"
                  >
                    <ArrowRightIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
