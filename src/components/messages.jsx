import React from "react";
import styled from "styled-components";
import Sender from "./common/sender";

const MessageContainer = styled.div`
  position: fixed;
  top: calc(5vh + 20px);
  width: 100%;
  height: calc(100vh - 35px);
  overflow-y: auto;
`;

const Message = styled.div`
  display: flex;
  padding: 0 10px;
  min-width: 50%;
  margin: 5px;
  border-radius: 5px;
`;

const Content = styled.p`
  border: 1px solid #f5f5f5;
  display: inline-block;
  padding: 10px;
  margin-left: 10px;
  border-radius: 8px 8px 8px 0;
  word-wrap: break-word;
`;

const Messages = ({ messages }) => {
  return (
    <MessageContainer>
      {messages.length !== 0
        ? messages.map((message, index) => (
            <div key={index}>
              <Message className>
                <Sender sender={message.sender[0]} />
                <Content>{message.data}</Content>
              </Message>
            </div>
          ))
        : null}
    </MessageContainer>
  );
};

export default Messages;
