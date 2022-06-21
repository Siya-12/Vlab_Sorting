import React,{useState} from "react";
import './PostTest.css';

function PostTest(){
    const question=[
        {
          questionText: 'What is the running time of insertion sort if the input is pre-sorted?',
          answersOptions:[
            {answerText: 'O(N^2)',isCorrect: false},
            {answerText: 'O(N log N)',isCorrect: false},
            {answerText: 'O(N)',isCorrect: true},
            {answerText: 'O(M log N)',isCorrect: false},
          ],
        },
        {
          questionText:'What will be the number of passes to sort the elements using insertion sort ? 14,12,16,6,3,10',
          answersOptions:[
            {answerText: '6',isCorrect: false},
            {answerText: '5',isCorrect: true},
            {answerText: '7',isCorrect: false},
            {answerText: '1',isCorrect: false},
          ],
        },
    
        {
          questionText:'for the following question, how will the array elements look like after the second pass?  34,8,64,51,32,21',
          answersOptions:[
            {answerText: '8,21,32,34,51,64',isCorrect: false},
            {answerText: '8,32,34,51,64,21',isCorrect: false},
            {answerText: '8,34,51,64,32,21',isCorrect: false},
            {answerText: '8,34,64,51,32,21',isCorrect: true},
          ],
        },
      ];
      const [currentQuestion, setCurrentQuestion]=useState(0);
      const [showScore, setScore]=useState(false);
      const [score,setfinalScore]=useState(0);
      const handleButtonClick = (isCorrect) =>{
          if(isCorrect===true){
              setfinalScore(score+1);
              alert("Right Answer!")
            
          }else{
              alert("Wrong Answer!")
          }
          const nextQuestion=currentQuestion+1;
          if(nextQuestion<question.length){
            setCurrentQuestion(nextQuestion);
           
          }else{
              setScore(true); 
          }
      }
      return(
        < div className='app'>
          {showScore? (
            <div className='score-Section'> You scored {score} out of {question.length}</div>
          ):(
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question{currentQuestion+1}</span>/{question.length}
                </div>
                <div className='question-text'>{question[currentQuestion].questionText}</div>
              </div>
    
              <div className='answer-section'>
                {question[currentQuestion].answersOptions.map((answersOption) => (
                <button onClick={()=>handleButtonClick(answersOption.isCorrect)}>{answersOption.answerText}</button>))}
              </div>
            </>
          )}
        </div>
      );
}

export default PostTest;