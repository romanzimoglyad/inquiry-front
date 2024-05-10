import React, { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  const deleteToken = () => {
    sessionStorage.removeItem("token");
  };
  return {
    setToken: saveToken,
    deleteToken,
    token,
  };
};

export default useToken;
