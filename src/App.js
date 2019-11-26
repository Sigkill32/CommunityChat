import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ChatBox from "./components/chatBox";

class App extends Component {
  state = {
    socket: null,
    messages: [],
    message: "",
    username: "",
    typist: null,
    users: [],
    userButtonStr: "Join"
  };

  componentDidMount() {
    const socket = this.socketInit();
    this.setState({ socket });
    socket.emit("connect");
    socket.on("MESSAGE_RECIEVED", message => {
      const messages = [...this.state.messages, message];
      this.setState({ messages });
    });
    socket.on("typing", typist => {
      this.setState({ typist });
    });
    socket.on("AVILABLE_USERS", users => {
      this.setState({ users });
      console.log(this.state.users);
    });
  }

  socketInit = () => socketIOClient("http://192.168.1.27:3001");

  handleChange = e => {
    const { socket, username } = this.state;
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
    if (name === "message") socket.emit("typing", username);
  };

  handleClick = () => {
    const { message, socket, username } = this.state;
    const messageObj = { sender: username, data: message };
    socket.emit("chat", messageObj);
    const messages = [...this.state.messages, messageObj];
    this.setState({ message: "", messages });
    socket.emit("typing", null);
  };

  handleSetUser = () => {
    const { socket, username } = this.state;
    socket.emit("SET_USER", username);
    this.setState({ userButtonStr: false });
  };

  render() {
    const {
      message,
      messages,
      username,
      typist,
      userButtonStr,
      users
    } = this.state;
    return (
      <div>
        <ChatBox
          typist={typist}
          messages={messages}
          onHandleChange={this.handleChange}
          onHandleClick={this.handleClick}
          message={message}
          username={username}
          onHandleSetUser={this.handleSetUser}
          userButtonStr={userButtonStr}
          users={users}
        />
      </div>
    );
  }
}

export default App;
