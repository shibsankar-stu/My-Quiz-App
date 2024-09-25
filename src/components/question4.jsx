function Question4({score , setScore}){
    function getValue(){
        
        let x = document.getElementById("Question4");
        if(x.elements["Question"].value == "Indian Bank" ){
            setScore(score+=1)
            console.log(score)
            document.getElementById("result").innerHTML = ` Result: ${score}`;
            document.getElementById("output").innerHTML = `Correct Answare`;
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
           document.getElementById("question3Container").style.display = "none";
           document.getElementById("question4Container").style.display = "none";
           document.getElementById("question5Container").style.display = "flex";
        //    document.getElementById("output").innerHTML = "";
            
        }else{
            document.getElementById("output").innerHTML = `Wrong Answare`
            document.getElementById("output").style.color = "red";
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
           document.getElementById("question3Container").style.display = "none";
           document.getElementById("question4Container").style.display = "none";
           document.getElementById("question5Container").style.display = "flex";
        //    document.getElementById("output").innerHTML = "";
            
        }
    }
    
    return (<div id="question4Container">
        <h2>Question 4</h2>
        <h3> Which of the three banks will be merged with the other two to create India’s third-largest bank?</h3>
        <form id="Question4">
            <label  > <input type="radio" name="Question" id="Caspian" 
            value="Punjab National Bank" /> Punjab National Bank</label>

            <label> <input type="radio" name="Question" id="Baikal"
            value="Bank of Baroda " /> Bank of Baroda </label>

            <label > <input type="radio" name="Question" id="Lake Superior"
             value="Indian Bank"  />Indian Bank</label>

            <label > <input type="radio" name="Question" id="Ontario"
             value="Dena Bank"  />Dena Bank</label>
        </form>
        <button onClick={getValue} >Submit</button>
        {/* <button id="next2">Next</button> */}
        <p id="show"></p>

    </div>);
}
export default Question4;