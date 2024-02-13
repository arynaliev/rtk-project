import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import { Button, TextField } from "@mui/material";

const creds = {
  username: "azim",
  password: "1808",
};

const LoginApp = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      userInfo.username === creds.username &&
      userInfo.password === creds.password
    ) {
      const user = {
        name: userInfo.username,
        lastLoginTime: new Date().toLocaleString(),
        isAuthenticated: true,
      };

      dispatch(login(user));
    } else {
      alert("try again");
      setUserInfo({ username: "", password: "" });
    }
  }

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h3>Login Page</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          padding: "2rem",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <TextField
          type="text"
          name="username"
          value={userInfo.username}
          variant="standard"
          label="username"
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          value={userInfo.password}
          variant="standard"
          label="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginApp;
