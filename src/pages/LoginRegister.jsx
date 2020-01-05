import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import Password from "../components/Password.jsx";
import Email from "../components/Email.jsx";

import axios from "axios";
import "./LoginRegister.scss";
export default function LoginRegister() {
  //if login == false, then show register form
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successRegistration, setSuccessRegistration] = useState(false);
  const history = useHistory();

  const handleNavigation = () => {
    setLogin(!login);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let url = login ? "login" : "register";
    axios
      .post(`http://localhost:8080/auth/${url}`, {
        email: email,
        password: password
      })
      .then(url === "login" ? (res) => {
        localStorage.setItem("auth-token", res.data);
        history.push("/dashboard");
      } : ()=>{setSuccessRegistration(true);setLogin(true); setTimeout(()=>{
        setSuccessRegistration(false);
      },4000)})
      .catch(function(error) {
        if (error.response) {
          setError(error.response.data);
          setTimeout(() => {
            setError("");
          }, 4000);
        }
      });
  };


//Dynamically changing style of sideNavigation
  const rightLeft = login ? "rightSide" : "leftSide";
  const classNavigation = `Navigation ${rightLeft}`;
  
  return (
    <div className="LoginRegister">
      <div className="Background" />
      <Alert
        variant="warning"
        dismissible
        onClose={() => {
          setError("");
        }}
        style={error !== "" ? {display:"block"} : {display:"none"}}
      >
        {error}
      </Alert>
      <Alert variant="success" style={successRegistration ? {display:"block"} : {display:"none"}}>You've been successfully registered!</Alert>
      <div className="Form">
        <div className={classNavigation} onClick={handleNavigation}>
          <span>{login ? "Register" : "Log in "}</span>
        </div>
        <h2 className="header mb-4 pt-5 text-center">
          {login ? "LOG IN" : "REGISTER"}
        </h2>
        <FontAwesomeIcon icon={faUsers} className="usersIcon" />
        <Form onSubmit={handleSubmit}>
          <Email value={email} onChange={setEmail} />
          <Password value={password} onChange={setPassword} />
          <Button variant="dark" type="submit">
            {login ? "Log in " : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
