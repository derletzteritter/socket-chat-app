import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Join.css";

const LoginContainer = styled("div")`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #424242;
  text-align: center;
  width: 700px;
  height: 500px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <LoginContainer>
        <h1 className="login-title">Join the chat!</h1>
        <div className="login-form">
          <input   
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Room"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
            <button className="button" type="submit">
              Connect
            </button>
          </Link>
        </div>
      </LoginContainer>
    </div>
  );
}
