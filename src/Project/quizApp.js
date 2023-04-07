import React, { useState } from 'react'

const questions = [
    {
        questionText: "Who is the President of India",
        answerOption: [
            { answerText: "Droupadi Murmu", isCorrect: true },
            { answerText: "Pratibha Devi Singh Patil", isCorrect: false },
            { answerText: "Ramnath Kovind", isCorrect: false },
            { answerText: "APJ Abdul Kalam", isCorrect: false },
        ]
    },
    {
        questionText: "Who is the Foreign Minister of India",
        answerOption: [
            { answerText: "Subrahmanyam Jaishankar", isCorrect: true },
            { answerText: "Sushma Swaraj", isCorrect: false },
            { answerText: "Atal Bihari Vajpayee", isCorrect: false },
            { answerText: "Jaswant Singh", isCorrect: false },
        ]
    },
    {
        questionText: "How many member of parliament in India",
        answerOption: [
            { answerText: "220", isCorrect: false },
            { answerText: "530", isCorrect: false },
            { answerText: "545", isCorrect: true },
            { answerText: "350", isCorrect: false },
        ]
    },
    {
        questionText: "What is the full form of BJP",
        answerOption: [
            { answerText: "Bhartiye Jansankhya Party", isCorrect: false },
            { answerText: "Bhartiye Janta Party", isCorrect: true },
            { answerText: "Bharat Janm Siddhant", isCorrect: false },
            { answerText: "Bharat Janta Pradhan", isCorrect: false },
        ]
    },
    {
        questionText: "How many states in India",
        answerOption: [
            { answerText: "20", isCorrect: false },
            { answerText: "29", isCorrect: false },
            { answerText: "25", isCorrect: false },
            { answerText: "28", isCorrect: true },
        ]
    }
]
const QuizApp = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButton = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    }
    return (
        <div className='App'>
            <div className='question-container'>
                {
                    showScore ?
                        <div>You have scored {score} out of 5</div> :
                        <>
                            <div className='question-section'>
                                <span>Question {currentQuestion + 1}/ {questions.length}</span>
                                <p className='question-head'>{questions[currentQuestion].questionText}</p>
                            </div>
                            <div className='answer-section'>
                                {
                                    questions[currentQuestion].answerOption.map((answer, i) => {
                                        return (
                                            <button onClick={() => handleAnswerButton(answer.isCorrect)} className='option' key={i}>{answer.answerText}</button>
                                        )
                                    })
                                }
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default QuizApp