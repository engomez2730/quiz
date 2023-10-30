import React, { useState, useEffect } from "react";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { questions } from "../Utils/Data";
import "./Quiz.css";

function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [textResponse, setTextResponse] = useState("");
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const history = useNavigate();

  const isLastQuestion = currentStep === questions.length - 1;

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

  const next = () => {
    if (currentQuestion.type === "text") {
      if (textResponse.trim() === "") {
        message.error("Please enter your answer", 2);
        return;
      }
    } else {
      if (selectedAnswer === null) {
        message.error("Please select an answer.", 2);
        return;
      }
    }

    const responseObj = {
      question: questions[currentStep].question,
      answer: selectedAnswer || textResponse,
    };

    const updatedResponses = responses.filter(
      (response) => response.question !== questions[currentStep].question
    );
    updatedResponses.push(responseObj);

    setResponses(updatedResponses);

    if (selectedAnswer === questions[currentStep].correctAnswer) {
      setScore(score + 1);
    }

    if (currentStep === questions.length - 1) {
      history("/");
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
        <h2 className="labelPregunta">Question number {currentStep + 1}</h2>
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
