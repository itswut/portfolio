import React, { useState } from "react";

const questions = [
    {
        question: "How old am I?",
        answers: ["25", "26", "18", "19"],
        correctAnswer: ["18"],
    },
    {
        question: "What is my favorite color?",
        answers: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: ["Blue"],
    },
    {
        question: "How many Animals do I have?",
        answers: ["2", "3", "4", "5"],
        correctAnswer: ["4"],
    },
];

const TinaQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        questions.reduce((acc, _, index) => {
            acc[index] = []; // Initialize empty array for each question's answers
            return acc;
        }, {})
    );
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswerChange = (answer) => {
        setSelectedAnswers((prevSelected) => {
            const updatedAnswers = { ...prevSelected };
            const currentAnswers = updatedAnswers[currentQuestionIndex] || [];

            if (currentAnswers.includes(answer)) {
                updatedAnswers[currentQuestionIndex] = currentAnswers.filter((a) => a !== answer); // Remove answer if already selected
            } else {
                updatedAnswers[currentQuestionIndex] = [...currentAnswers, answer]; // Add answer if not already selected
            }

            return updatedAnswers;
        });
    };

    const validateCurrentQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const selected = selectedAnswers[currentQuestionIndex] || [];
        const isCorrect =
            selected.length === currentQuestion.correctAnswer.length &&
            selected.every((answer) => currentQuestion.correctAnswer.includes(answer));

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1); // Increment score if the answer is correct
        }

        setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex)); // Mark question as answered
    };

    const handleNext = () => {
        validateCurrentQuestion(); // Validate the current question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleSubmit = () => {
        let totalScore = 0;

        // Validate answers for all questions
        questions.forEach((question, index) => {
            const selected = selectedAnswers[index] || [];
            const isCorrect =
                selected.length === question.correctAnswer.length &&
                selected.every((answer) => question.correctAnswer.includes(answer));

            if (isCorrect) {
                totalScore++;
            }
        });

        setScore(totalScore); // Update the score
        setFinished(true); // End quiz
    };

    const handleNavigation = (index) => {
        setCurrentQuestionIndex(index);
    };

    const restartQuiz = () => {
        setFinished(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setAnsweredQuestions(new Set());
        setSelectedAnswers(
            questions.reduce((acc, _, index) => {
                acc[index] = []; // Reset selected answers
                return acc;
            }, {})
        );
    };

    const percentageCorrect = Math.round((score / questions.length) * 100); // Calculate percentage

    return (
        <div className="flex justify-center items-start h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <div className="flex flex-col md:flex-row max-w-6xl w-full p-4 gap-4">
                {/* Sidebar with question numbers */}
                <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Progress Overview</h3>
                    <div className="grid grid-cols-5 gap-2">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavigation(index)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-semibold cursor-pointer transition-all ${
                                    selectedAnswers[index]?.length > 0 // Check if any answers are selected
                                        ? "bg-blue-500 text-white" // Highlight selected questions
                                        : answeredQuestions.has(index)
                                        ? "bg-green-500 text-white" // Highlight answered questions
                                        : "bg-gray-300 text-black" // Default for unanswered questions
                                } hover:bg-green-400`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main quiz container */}
                <div className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-lg">
                    {!finished ? (
                        <>
                            <div className="mb-6 text-xl font-semibold">
                                Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
                            </div>
                            <div className="space-y-4">
                                {questions[currentQuestionIndex].answers.map((answer) => (
                                    <label key={answer} className="block">
                                        <div
                                            className={`p-4 border-2 rounded-lg cursor-pointer ${
                                                selectedAnswers[currentQuestionIndex]?.includes(answer)
                                                    ? "bg-blue-200"
                                                    : "bg-white"
                                            } hover:bg-blue-100 transition-all`}
                                        >
                                            <input
                                                type="checkbox"
                                                value={answer}
                                                onChange={() => handleAnswerChange(answer)}
                                                checked={selectedAnswers[currentQuestionIndex]?.includes(answer)}
                                                className="mr-2"
                                            />
                                            <span className="text-lg">{answer}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentQuestionIndex === 0}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-lg w-32 transition-all hover:bg-gray-600"
                                >
                                    Previous
                                </button>
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <button
                                        onClick={handleNext}
                                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-32 transition-all hover:bg-blue-600"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg w-32 transition-all hover:bg-green-600"
                                    >
                                        Finish
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-6">Quiz Finished!</h2>
                            <p className="text-lg">Your score: {score} / {questions.length}</p>
                            <p className="text-lg">Percentage: {percentageCorrect}%</p>
                            <button
                                onClick={restartQuiz}
                                className="mt-6 bg-gray-500 text-white py-2 px-4 rounded-lg"
                            >
                                Restart Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TinaQuiz;