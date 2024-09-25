import React, {useState} from 'react';
import Question1 from "./question1";
import Question2 from "./question2";
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
function QuizBox(){
    let [score, setScore] = useState(0)
    // let score = 0;
    
    return(<>
    <h1>QUIZ APP</h1>
    <h2 id="result">Result: {score} </h2>
    <h3 id="output" ></h3>
    <Question1 score = {score} setScore = {setScore}></Question1>
    <Question2 score = {score} setScore = {setScore}></Question2>
    <Question3 score = {score} setScore = {setScore}></Question3>
    <Question4 score = {score} setScore = {setScore}></Question4>
    <Question5 score = {score} setScore = {setScore}></Question5>
    </>);
}
export default QuizBox;