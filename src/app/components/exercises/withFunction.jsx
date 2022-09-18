import React from "react";
import CardWrapped from "../../components/common/Card";

const withFunction = (Component) => () => {
  const isAuth = localStorage.getItem("auth") === "token";
  const onLogin = () => localStorage.setItem("auth", "token");
  const onLogOut = () => localStorage.removeItem("auth");

  return (
    <CardWrapped>
      <Component
        isAuth={isAuth}
        onLogin={onLogin}
        onLogOut={onLogOut}
      />
    </CardWrapped>
  );
};

export default withFunction;
