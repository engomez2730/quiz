import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    var navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const AmILoggedIn = () => {
      if (isLoggedIn) {
        navigate("/");
      }
    };
    useEffect(() => {
      AmILoggedIn();
    });
    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};
