function Question1({score , setScore}){
    
    function getValue(){
        
        let x = document.getElementById("Question");
        if(x.elements["Question"].value == "Baikal" ){
            setScore(score+= 1)
            document.getElementById("result").innerHTML = ` Result: ${score}`;
            document.getElementById("output").innerHTML = `Correct Answare`;
            nextQuestion2()
            
        }else{
            document.getElementById("output").innerHTML = `Wrong Answare`
            document.getElementById("output").style.color = "red";
            nextQuestion2()
            
        }
    }

    function nextQuestion2(){
        document.getElementById('question1Container').style.display = "none";
        document.getElementById("question2Container").style.display = "flex";
        document.getElementById("question3Container").style.display = "none";
        // document.getElementById("output").innerHTML = "";
        
    }
    
    return (<div id="question1Container">
        <h2>Question 1</h2>
        <h3>What is the largest lake in the world?</h3>
        <form id="Question">
            <label  > <input type="radio" name="Question" id="Caspian" value="Caspian Sea" /> Caspian Sea</label>

            <label> <input type="radio" name="Question" id="Baikal"
            value="Baikal" /> Baikal</label>

            <label > <input type="radio" name="Question" id="Lake Superior"
             value="Lake Superior"  /> Lake Superior</label>

            <label > <input type="radio" name="Question" id="Ontario"
             value="Ontario"  /> Ontario</label>
        </form>
        <button onClick={getValue} >Submit</button>
        {/* <button id="next" onClick={nextQuestion2}>Next</button> */}
        <p id="show"></p>

    </div>);
}
export default Question1;