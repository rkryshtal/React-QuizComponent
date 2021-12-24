import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 0,
        };
    }

    showNextQuestion()
    {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        });
    }

    render() {
        const isQuizEnd = this.state.quiz_position  == quizData.quiz_questions.length;
        let content = (
            <QuizQuestion
                quiz_question={
                    quizData.quiz_questions[this.state.quiz_position]
                }

                showNextQuestionHandler={this.showNextQuestion.bind(this)}
            />
        );

        if (isQuizEnd) {
            content = (
                <QuizEnd />
            );
        }

        return <div>{content}</div>;
    }
}

export default Quiz;
