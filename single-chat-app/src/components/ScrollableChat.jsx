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

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const delteMsg= async(SenderId,messageId)=>{
    console.log('SenderId',SenderId);
    console.log('messageId',messageId);
    try {
      let result = await axios.delete(`http://localhost:2709/api/message/${messageId}/${SenderId}`,config)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

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
              onDoubleClick={()=>delteMsg(m.sender._id,m._id)}
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

              <span style={{fontSize:'0.8rem',paddingLeft:'0.3rem'}}>
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
