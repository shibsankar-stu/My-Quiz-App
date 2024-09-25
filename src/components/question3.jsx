function Question3({score , setScore}){
    function getValue(){
        
        let x = document.getElementById("Question3");
        if(x.elements["Question"].value == "Mumbai" ){
            setScore(score+=1)
            console.log(score)
            document.getElementById("result").innerHTML = ` Result: ${score}`;
            document.getElementById("output").innerHTML = `Correct Answare`;
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
           document.getElementById("question3Container").style.display = "none";
           document.getElementById("question4Container").style.display = "flex";
        //    document.getElementById("output").innerHTML = "";
            
        }else{
            document.getElementById("output").innerHTML = `Wrong Answare`
            document.getElementById("output").style.color = "red";
            document.getElementById('question1Container').style.display = "none";
            document.getElementById('question2Container').style.display = "none";
           document.getElementById("question3Container").style.display = "none";
           document.getElementById("question4Container").style.display = "flex";
        //    document.getElementById("output").innerHTML = "";
        }
    }
    
    return (<div id="question3Container">
        <h2>Question 3</h2>
        <h3>  Where was India’s first national Museum opened?</h3>
        <form id="Question3">
            <label  > <input type="radio" name="Question" id="Caspian" 
            value="Delhi" /> Delhi</label>

            <label> <input type="radio" name="Question" id="Baikal"
            value="Hyderabad" /> Hyderabad</label>

            <label > <input type="radio" name="Question" id="Lake Superior"
             value="Rajasthan"  />Rajasthan</label>

            <label > <input type="radio" name="Question" id="Ontario"
             value="Mumbai"  />Mumbai</label>
        </form>
        <button onClick={getValue} >Submit</button>
        {/* <button id="next2">Next</button> */}
        <p id="show"></p>

    </div>);
}
export default Question3;