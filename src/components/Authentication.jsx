import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Authentication = props => {
  const [user, setUser] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem("auth-token");
    //If user doesn't have jwt token
    if (!jwt) history.push("/login");

    //Verify the token
    axios.get('/protected', {headers: {"auth-token": jwt}}).then(res => setUser(res.data))
  // eslint-disable-next-line
  },[]);
  if (user === undefined) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <div>{props.children}</div>;
};
export default Authentication;
