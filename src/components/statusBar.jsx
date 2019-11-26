import React from "react";
import styled from "styled-components";

const Stat = styled.div`
  padding: 10px 0;
  background-color: #1f2532;
  height: 5vh;
  position: fixed;
  top: 0;
  width: 100%;
  p {
    color: white;
    margin-left: 10px;
  }
`;

const Usr = styled.span`
  margin: 0 5px;
  text-align: center;
`;

const StatusBar = ({ typist, users }) => {
  return (
    <Stat>
      <p>
        {users.length === 0
          ? "The room is empty. Be the first to join"
          : typist
          ? `${typist} is typing....`
          : users.map(usr => (
              <Usr key={Object.keys(usr)[0]}>{Object.values(usr)[0]}</Usr>
            ))}
      </p>
      {/* <p>Manoj is typing...</p> */}
    </Stat>
  );
};

export default StatusBar;
