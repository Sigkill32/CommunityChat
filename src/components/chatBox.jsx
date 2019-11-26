import React from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import StatusBar from "./statusBar";

const ChatBox = ({
  typist,
  messages,
  onHandleChange,
  onHandleClick,
  message,
  username,
  onHandleSetUser,
  userButtonStr,
  users
}) => {
  return (
    <div>
      <StatusBar typist={typist} users={users} />
      <Messages messages={messages} />
      <MessageInput
        onHandleChange={onHandleChange}
        onHandleClick={onHandleClick}
        message={message}
        username={username}
        typist={typist}
        onHandleSetUser={onHandleSetUser}
        userButtonStr={userButtonStr}
      />
    </div>
  );
};

export default ChatBox;
