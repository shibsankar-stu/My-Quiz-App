function Question5({score , setScore}){
    function getValue(){
        
        let x = document.getElementById("Question5");
        if(x.elements["Question"].value == "Uranus" ){
            setScore(score+=1)
            console.log(score)
                document.getElementById("result").innerHTML = ` Result: ${score}`;
                document.getElementById("output").innerHTML = `Correct Answer.
                 Your Total Score is ${score}/5`;
        }else{
            document.getElementById("output").innerHTML = `Wrong Answer. Your Total Score is ${score}/5`
            document.getElementById("output").style.color = "red"
            
        }
         let button = document.getElementById("myLastBtn");
         button.remove();
        
    }
    
    return (<div id="question5Container">
        <h2>Question 5</h2>                                                                                                                                             
        <h3> The green planet in the solar system is?</h3>
        <form id="Question5">
            <label  > <input type="radio" name="Question" id="Caspian" 
            value="Mars" /> Mars</label>

            <label> <input type="radio" name="Question" id="Baikal"
            value="Uranus" /> Uranus</label>

            <label > <input type="radio" name="Question" id="Lake Superior"
             value="Venus"  />Venus</label>

            <label > <input type="radio" name="Question" id="Ontario"
             value="Earth"  />Earth</label>
        </form>
        <button onClick={getValue}  id="myLastBtn">Submit</button>
        {/* <button id="next2">Next</button> */}
        <p id="show"></p>

    </div>);
}
export default Question5;