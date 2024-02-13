import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

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
        lastLoginTime: new Date(),
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginApp;
