import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
  isSameDate,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import { useToast, Flex, Image, Text } from "@chakra-ui/react";
import ImgLoading from "./ImgLoading";
import { useEffect, useState } from "react";
import Today from "./miscellaneous/Today";

const ScrollableChat = ({
  messages,
  fetchMessages,
  selectedFile,
  picLoading,
}) => {
  const { user } = ChatState();
  const toast = useToast();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const [printedToday, setPrintedToday] = useState(false);

  const delteMsg = async (SenderId, messageId) => {
    // console.log("SenderId", SenderId);
    // console.log("messageId", messageId);
    try {
      let result = await axios.delete(
        `https://single-chat-app.onrender.com/api/message/${messageId}/${SenderId}`,
        config
      );
      if (result.data.deletedCount === 1) {
        toast({
          title: "Chat Deleted...!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom",
        });
        fetchMessages();
      } else {
        toast({
          title: `${result.data.messages}`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const printToday = (date) => {
    const createdAtDate = date.slice(0, 10);
    const currentDate = getCurrentDate();
    return createdAtDate === currentDate ? "Today" : createdAtDate;
  };

  let temp = [];
  messages &&
    messages.forEach((m, i) => {
      temp.push(isSameDate(messages, m, i));
    });

  // console.log('temp',temp);

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <>
            <Today messages={messages} m={m} i={i} temp={temp} />
            <div style={{ display: "flex" }} key={m._id}>
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}

              <span
                onDoubleClick={() => delteMsg(m.sender._id, m._id)}
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                  }`,
                  marginLeft: isSameSenderMargin(messages, m, i, user._id),
                  marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                  borderRadius: "20px",
                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {m.content.includes(
                  "http://res.cloudinary.com/dtzrtlyuu/image/upload/"
                ) ? (
                  <Image
                    src={m.content}
                    alt="Image"
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                ) : (
                  m.content
                )}
                <span style={{ fontSize: "0.8rem", paddingLeft: "0.3rem" }}>
                  {new Date(m.createdAt).toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </span>
            </div>
          </>
        ))}
      {picLoading && <ImgLoading />}
      {selectedFile && (
        <>
          <Text ml="5px" fontSize="sm" color="gray.500">
            Privew
          </Text>
          <Image
            src={`${selectedFile}`}
            alt="Selected File"
            boxSize="30px"
            objectFit="cover"
            borderRadius="md"
            width="100px"
            height="100px"
          />
        </>
      )}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
