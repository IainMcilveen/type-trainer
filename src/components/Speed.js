import React, {useState} from "react"

function Speed(props){

    //text hooks
    let [text, setText] = useState("");
    let [para, setPara] = useState(props.paragraph);
    
    //hooks for calculations 
    let [errors, setErrors] = useState(0);
    let [words, setWords] = useState(0);
    let [char, setChar] = useState(0);

    //function used for updating the text box as well as the paragraph
    //the user reads from
    function updateText(text){
        setText(text);
        setChar(char + 1);
        setPara(paraStyling(props.paragraph));
        console.log(paraStyling(props.paragraph));
    }

    function paraStyling(text){
        return React.createElement('i',{},(props.paragraph).substring(char,findNext(text,char))) + (props.paragraph).substring(findNext(text,char),props.paragraph.length);
    }

    //finds the character location of the next space in the paragraph
    //if there are none left it returns the number of characters left in the paragraph 
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
            <p className="test-text">{para}</p>
            <input type="text" onChange={e => updateText(e.target.value)} />
        </div>
    );
}

export default Speed;