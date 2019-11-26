import React from "react";
import styled from "styled-components";
import send from "../images/send-button.svg";

const Input = styled.input`
  width: calc(100% - 28px);
  outline: none;
  border: none;
  height: 30px;
  padding-left: 10px;
`;

const Button = styled.button`
  width: 10%;
  cursor: pointer;
  color: white;
  background-color: #000;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
`;

const FlexDiv = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
`;

const SendButton = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 5px;
  width: 100%;
`;

const MessageInput = ({
  onHandleChange,
  message,
  onHandleClick,
  username,
  onHandleSetUser,
  userButtonStr
}) => {
  return (
    <InputContainer>
      {userButtonStr ? (
        <FlexDiv style={{ display: "flex" }}>
          <Input
            type="text"
            onChange={onHandleChange}
            value={username}
            name="username"
            placeholder="Username"
          />
          {username.length > 0 ? (
            <Button onClick={onHandleSetUser}>{userButtonStr}</Button>
          ) : null}
        </FlexDiv>
      ) : null}
      <FlexDiv>
        <Input
          type="text"
          onChange={onHandleChange}
          value={message}
          placeholder="Enter your message"
          name="message"
        />
        {message.length > 0 ? (
          <SendButton src={send} alt="send-button" onClick={onHandleClick} />
        ) : null}
      </FlexDiv>
    </InputContainer>
  );
};

export default MessageInput;
