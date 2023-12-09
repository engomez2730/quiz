import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";
import { useSelector } from "react-redux";
import "./Result.css";

const ResultComponent = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div className="result">
      {" "}
      <Result
        icon={<SmileOutlined />}
        title="Congratulations, you have completed all questions correctly."
        extra={
          <h1>
            Your Score was: {userData?.user?.score ? userData?.user?.score : 0}
          </h1>
        }
      />
    </div>
  );
};

export default ResultComponent;
