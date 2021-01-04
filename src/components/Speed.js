import React, { useState, useEffect } from "react"
const parse = require('html-react-parser');

function Speed(props){

    //text hooks
    let [curText, setCurText] = useState("");
    let [totText, setTotText] = useState("");
    let [correct, setCorrect] = useState(true);
    let [para, setPara] = useState(props.paragraph);
    
    //hooks for calculations 
    let [charAmt, setCharAmt] = useState(0);

    //function used for updating the text box as well as the paragraph
    //the user reads from
    useEffect(() => {
        updateText();
    });

    function updateText() {
        console.log("curText: "+curText);
        console.log("totText: "+totText);
        console.log("charAmt: "+charAmt);
        console.log("correct: "+correct);
    }

    /*
    //finds the character location of the next space in the paragraph
    //if there are none left it returns the number of characters left in the paragraph 
    function findNext(text, start){
        let next = (text.substring(start,text.length)).indexOf(" ");
        if(next !== -1){
            return start + (text.substring(start,text.length)).indexOf(" ");
        }else{
            return text.length;
        }
    }*/

    return(
        <div className="Speed-main">
            <h1>Speed</h1>
            <div className="Speed-para">{para}</div><br/>
            <input type="text" onChange={(event) => {
                let temp = event.target.value;
                /*
                if(temp.charAt(temp.length-1) !== props.paragraph.charAt(charAmt) || (totText.length+1) !== (props.paragraph).substring(0,charAmt+1).length){
                    setCorrect(false);*/
                //check to see if the text is correct
                if(temp.charAt(temp.length-1) !== props.paragraph.charAt(charAmt)){ 
                    setCorrect(false); //if not set the hook to false
                }else{ //otherwise set the hook to true and update all of the text boxes
                    setCorrect(true);
                    setCharAmt(charAmt+1);
                    setTotText(totText + temp.charAt(temp.length-1));
                    if(temp.charAt(temp.length-1) === " "){
                        event.target.value = "";
                    }
                }
                setCurText(temp)
                }} />
        </div>
    );
}

export default Speed;