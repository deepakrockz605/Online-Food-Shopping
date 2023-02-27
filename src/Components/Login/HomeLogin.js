import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Login from "./Login";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { onLoginStatusChange } from "../../actions/cartActions";
import "./HomeLogin.scss";
import { useNavigate } from "react-router-dom";

const HomeLogin = (props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("usertoken");
    if (loggedInUser) {
      navigate(-1);
    }
  });

  const handleUserLogin = (langValue) => {
    setIsLogin(langValue);
  };

  const onLoginStatusChange = (value) => {
    props.onLoginStatusChange(value);
  };

  return (
    <div
      className={
        "HomeLogin--Wrapper" + " " + (isLogin ? "HomeLogin--RowWrapper" : "")
      }
    >
      <div className="HomeLogin--carausal">
        <Slider />
      </div>
      <div
        className={
          "HomeLogin--box" + " " + (isLogin ? "HomeLogin--box--RowWrapper" : "")
        }
      >
        {isLogin ? (
          <SignUp handleLoginType={handleUserLogin} />
        ) : (
          <Login
            handleLoginType={handleUserLogin}
            onLoginStatusChange={onLoginStatusChange}
          />
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginStatusChange: (value) => {
      dispatch(onLoginStatusChange(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(HomeLogin);
