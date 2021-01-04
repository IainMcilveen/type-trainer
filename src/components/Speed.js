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
                if(temp.charAt(temp.length-1) !== props.paragraph.charAt(charAmt+1)){
                    setCorrect(false);
                }else{
                    setCorrect(true);
                    setCharAmt(charAmt+1);
                }
                setCurText(temp)
                setTotText(totText + temp.charAt(temp.length-1))}} />
        </div>
    );
}

export default Speed;