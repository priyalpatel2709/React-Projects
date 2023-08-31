import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const ScrollableChat = ({ messages,fetchMessages }) => {
  const { user } = ChatState();
  const toast = useToast();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const delteMsg = async (SenderId, messageId) => {
    console.log("SenderId", SenderId);
    console.log("messageId", messageId);
    try {
      let result = await axios.delete(
        `https://single-chat-app.onrender.com/api/message/${messageId}/${SenderId}`,
        config
      );
      if(result.data.deletedCount ===1){
        toast({
          title: "Chat Deleted...!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom",
        });
        fetchMessages()
      }else{
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

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
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
              {m.content}

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
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
