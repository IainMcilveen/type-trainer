import React, {useState} from "react"

function Speed(){

    let [text, setText] = useState("");
    let [errors, setErrors] = useState(0);
    let [words, setWords] = useState(0);
    let [char, setChar] = useState(0);

    function updateText(text){
        setText(text);
        console.log(findNext(text,char));
    }

    function findNext(text, start){
        let next = (text.substring(start,text.length)).indexOf(" ");
        if(next !== -1){
            return start + (text.substring(start,text.length)).indexOf(" ");
        }else{
            return text.length;
        }
    }

    return(
        <div className="Speed-main">
            <h1>Speed</h1>
            <p className="test-text">This is the paragraph for which people will be tested, hopefully they don't suck at typing.</p>
            <input type="text" onChange={e => updateText(e.target.value)} />
        </div>
    );
}

export default Speed;