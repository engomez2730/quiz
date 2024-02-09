import React, { useState, useEffect } from "react";
import { Button, Input, message } from "antd";
import axios from "axios";
import { questions } from "../Utils/Data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Slices/UserSLice";

import "./Quiz.css";

function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [textResponse, setTextResponse] = useState("");
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLastQuestion = currentStep === questions.length - 1;
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    // Load the user's previous response for the current question if available
    const savedResponse = responses.find(
      (response) => response.question === questions[currentStep].question
    );

    if (savedResponse) {
      if (questions[currentStep].type === "text") {
        setTextResponse(savedResponse.answer);
      } else {
        setSelectedAnswer(savedResponse.answer);
      }
    } else {
      setSelectedAnswer(null);
      setTextResponse("");
    }
  }, [currentStep, responses]);

  const submitQuiz = async (updatedResponses) => {
    try {
      const data = await axios.post(`http://localhost:5000/api/v1/questions/`, {
        name: userData.user.name,
        lastName: userData.user.lastName,
        email: userData.user.email,
        companyName: userData.user.companyName,
        questions: updatedResponses || responses,
        score: Math.round(score),
      });

      dispatch(setUser(data.data.user));
      navigate("/result");

      message.success("Quiz terminado");
    } catch (err) {
      console.log(err);
      message.error(err.message);
    }
  };

  const next = () => {
    // Handling text questions
    if (currentQuestion.type === "text") {
      if (textResponse.trim() === "") {
        message.error("Please enter your answer", 2);
        return;
      }

      const responseObj = {
        question: questions[currentStep].question,
        answer: textResponse,
        isScore: questions[currentStep].isScore,
      };

      const updatedResponses = [...responses];
      const existingResponseIndex = updatedResponses.findIndex(
        (response) => response.question === questions[currentStep].question
      );

      if (existingResponseIndex !== -1) {
        updatedResponses[existingResponseIndex] = responseObj;
      } else {
        updatedResponses.push(responseObj);
      }

      if (questions[currentStep].isScore) {
        setScore(score + 2.7);
      } else {
        setScore(score + 0); // Adding 0 if isScore is false
      }

      setResponses(updatedResponses);
    } else {
      // Handling multiple choice questions
      if (selectedAnswer === null) {
        message.error("Please select an answer.", 2);
        return;
      }

      const responseObj = {
        question: questions[currentStep].question,
        answer: selectedAnswer,
        isScore: questions[currentStep].isScore,
      };

      const updatedResponses = [...responses];
      const existingResponseIndex = updatedResponses.findIndex(
        (response) => response.question === questions[currentStep].question
      );

      if (existingResponseIndex !== -1) {
        updatedResponses[existingResponseIndex] = responseObj;
      } else {
        updatedResponses.push(responseObj);
      }

      if (selectedAnswer === "Yes" && questions[currentStep].isScore) {
        setScore(score + 2.7);
      } else {
        setScore(score + 0); // Adding 0 if conditions are not met
      }

      setResponses(updatedResponses);
    }

    if (currentStep === questions.length - 1) {
      if (questions[currentStep].type === "text") {
        // Check for the text-type last question to add it to responses
        if (textResponse.trim() === "") {
          message.error("Please enter your answer for the last question", 2);
          return;
        }

        const responseObj = {
          question: questions[currentStep].question,
          answer: textResponse,
          isScore: questions[currentStep].isScore,
        };

        const updatedResponses = [...responses];
        updatedResponses.push(responseObj);

        if (questions[currentStep].isScore) {
          setScore(score + 2.7);
        } else {
          setScore(score + 0); // Adding 0 if isScore is false
        }

        setResponses(updatedResponses);
        submitQuiz(updatedResponses);
      } else {
        message.error("Please answer the last question", 2);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleTextResponseChange = (event) => {
    setTextResponse(event.target.value);
  };

  const currentQuestion = questions[currentStep];

  return (
    <div>
      <div className="quiz-content">
        <h2 className="labelPregunta">Question {currentStep + 1}</h2>
        <h3 className="labelPreguntas">{currentQuestion.question}</h3>
        {currentQuestion.type === "text" ? (
          <Input
            style={{ width: "60%" }}
            type="textarea"
            value={textResponse}
            onChange={handleTextResponseChange}
            placeholder="Your answer..."
          />
        ) : (
          <div className="parent">
            {currentQuestion.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name="quiz-option"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="buttons">
          <Button type="primary" onClick={prev} disabled={currentStep === 0}>
            Back
          </Button>

          <Button type="primary" onClick={next}>
            {isLastQuestion ? "Finish Quiz" : "Next"}
          </Button>
        </div>
      </div>

      {currentStep === questions.length && (
        <div className="quiz-result">
          <h2>Quiz Complete</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>

          <div className="responses">
            {responses.map((response, index) => (
              <div key={index}>
                <p>Question: {response.question}</p>
                <p>Answer: {response.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
