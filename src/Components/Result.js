import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Result } from "antd";
import { useSelector } from "react-redux";
import "./Result.css";

const ResultComponent = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div className="result">
      {" "}
      <Result
        icon={<CheckOutlined style={{ color: "#1f2246" }} />}
        title="Thank you for completing the assessment!"
      />
    </div>
  );
};

export default ResultComponent;
