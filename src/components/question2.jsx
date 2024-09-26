function Question2({score , setScore}){
    function getValue(){
        
        let x = document.getElementById("Question2");
        if(x.elements["Question"].value == "Carbon dioxide" ){
            setScore(score+= 1)
            document.getElementById("result").innerHTML = ` Result: ${score}`;
            document.getElementById("output").innerHTML = `Correct Answer`;
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
        document.getElementById("question3Container").style.display = "flex";
        // document.getElementById("output").innerHTML = "";
            
        }else{
            document.getElementById("output").innerHTML = `Wrong Answer`
            document.getElementById("output").style.color = "red";
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
        document.getElementById("question3Container").style.display = "flex";
        // document.getElementById("output").innerHTML = "";
            
        }
    }
    
    return (<div id="question2Container">
        <h2>Question 2</h2>
        <h3>  What gas is used to extinguish fires?</h3>
        <form id="Question2">
            <label  > <input type="radio" name="Question" id="Caspian" 
            value="Oxygen" /> Oxygen</label>

            <label> <input type="radio" name="Question" id="Baikal"
            value="Nitrogen" /> Nitrogen</label>

            <label > <input type="radio" name="Question" id="Lake Superior"
             value="Carbon dioxide"  />Carbon dioxide</label>

            <label > <input type="radio" name="Question" id="Ontario"
             value="Hydrogen"  /> Hydrogen</label>
        </form>
        <button onClick={getValue} >Submit</button>
        {/* <button id="next2">Next</button> */}
        <p id="show"></p>

    </div>);
}
export default Question2;