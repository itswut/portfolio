import React, { useState } from "react";

const gifs = {
    answeredYes: [
        "https://media1.tenor.com/m/fGSaTq6FZ34AAAAd/lick-cheek-kisses.gif",
        "https://media1.tenor.com/m/wXfUjrXrdY4AAAAd/h%C3%B4n.gif"
    ],
    question: [
        "https://media1.tenor.com/m/ViqKvHcmPQEAAAAd/please.gif",
        "https://media1.tenor.com/m/PD7t69nTR18AAAAd/missing-you.gif"
    ]
};

const questions = [
    {
        question: "Do you still love me?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Please", "You must have clicked the wrong button"]
    },
    {
        question: "Will you be mine forever?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Oh no, are you sure?", "You must be joking!"]
    },
    {
        question: "Can I get a kiss?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Please, just one kiss!", "I promise, it's just a little kiss!"]
    },
    {
        question: "Do you think about me when we’re apart?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["You must be lying!", "You don't miss me?"]
    },
    {
        question: "Would you marry me?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Oh, come on, don’t tease me!", "You don’t want to marry me?"]
    },
    {
        question: "Do you feel butterflies when your with me?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["I can’t believe it!", "You don't feel the spark?"]
    },
    {
        question: "Am I the love of your life?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["You don’t mean it?", "Are you sure about that?"]
    },
    {
        question: "Will you be my Valentine?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        gif: "https://media1.tenor.com/m/K_E6ORTmXMoAAAAd/milk-and-mocha-love.gif",
        changeNoAnswers: ["What? You're breaking my heart!", "I’m still your Valentine, right?"]
    },
    {
        question: "Would you go on a date with me?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Are you sure?", "You don’t want to go out with me?"]
    },
    {
        question: "Can I be the one to make you smile every day?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Oh, that hurts!", "I’ll work harder!"]
    },
    {
        question: "Would you choose me over anything else?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
        changeNoAnswers: ["Do I not mean enough to you?", "I guess I’m not your first choice."]
    }
];

const Tina = () => {
    const [currentQuestion, setCurrentQuestion] = useState(() => questions[Math.floor(Math.random() * questions.length)]); // Select a random question initially
    const [gif, setGif] = useState(currentQuestion.gif || gifs.question[Math.floor(Math.random() * gifs.question.length)]);
    const [response, setResponse] = useState("");
    const [interactionEnded, setInteractionEnded] = useState(false);

    const handleAnswer = (answer) => {
        if (answer === currentQuestion.correctAnswer) {
            setGif(currentQuestion.gif || gifs.answeredYes[Math.floor(Math.random() * gifs.answeredYes.length)]);
            setResponse("Yayyy, thank you baby <3");
            setInteractionEnded(true);
        } else {
            const randomChangeNo = currentQuestion.changeNoAnswers[Math.floor(Math.random() * currentQuestion.changeNoAnswers.length)];
            setResponse(randomChangeNo);
        }
    };

    const handleNextQuestion = () => {
        const newQuestion = questions[Math.floor(Math.random() * questions.length)];
        setCurrentQuestion(newQuestion);
        setGif(newQuestion.gif || gifs.question[Math.floor(Math.random() * gifs.question.length)]);
        setResponse("");
        setInteractionEnded(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-96">
                {interactionEnded ? (
                    <div>
                        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">Yayyy, thank you baby</h1>
                        <img src={gif} alt="Gif" className="w-80 h-auto my-6 rounded-xl shadow-lg" />
                        <button className="mt-6 px-6 py-3 text-xl font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600" onClick={handleNextQuestion}>
                            Next Question
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h1>
                        <img src={gif} alt="Gif" className="w-80 h-auto my-6 rounded-xl shadow-lg" />
                        <div className="flex justify-around mb-6">
                            {currentQuestion.answers.map((answer) => (
                                <button
                                    key={answer}
                                    className={`px-6 py-3 text-xl font-semibold rounded-full focus:outline-none transform transition duration-300 
                                    ${answer === "Yes" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}`}
                                    onClick={() => handleAnswer(answer)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                        {response && <p className="mt-4 text-xl text-gray-700">{response}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tina;