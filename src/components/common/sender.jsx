import React from "react";
import styled from "styled-components";

const Avatar = styled.div`
  display: inline-block;
  border: 1px solid none;
  padding: 0 20px;
  border-radius: 50%;
  background-color: #eec764;
  text-transform: uppercase;
  h2 {
    width: 30px;
    text-align: center;
    color: white;
  }
`;

const Sender = ({ sender }) => {
  return (
    <Avatar>
      <h2>{sender}</h2>
    </Avatar>
  );
};

export default Sender;
