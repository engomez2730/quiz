import React from "react";
import "./User.css";

const User = ({ usuario }) => {
  return (
    <div className="parent">
      {usuario?.questions?.map((e, index) => {
        return (
          <div key={e._id}>
            <div className="questions">
              <span className="number">{index + 1}-</span>{" "}
              <span className="question">{e.question}</span>
            </div>
            <div className="answer">{e.answer}</div>
            <div className="raya"></div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
