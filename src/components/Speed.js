import React, {useState} from "react"
const parse = require('html-react-parser');

function Speed(props){

    //text hooks
    let [text, setText] = useState("");
    let [para, setPara] = useState(props.paragraph);
    
    //hooks for calculations 
    let [error, setError] = useState(-1);
    let [words, setWords] = useState(0);
    let [char, setChar] = useState(0);

    //function used for updating the text box as well as the paragraph
    //the user reads from
    function updateText(text){
        setText(text);

        if(error != -1){
            
        }

        if(text.substring(text.length-1,text.length) !== props.paragraph.charAt(char)){
            console.log(text.substring(text.length-1,text.length), props.paragraph.charAt(char))
            setError(char);
        }else{
            setError(-1);
            setChar(char + 1);
        }
        setPara(paraStyling(props.paragraph));
    }

    //add all of the styling to the paragraph 
    function paraStyling(text,error){
        //underline the word which is currently being typed
        let html = '<p>'+(text).substring(0,char)+'<u>'+(text).substring(char,findNext(text,char))+'</u>'+(text).substring(findNext(text,char),text.length)+'</p>'
        //highlight in red the incorrect character
        if(error !== -1){
            html = html.substring(0,error) + '<red>' + html.substring(0,error+1) + '</red>' + html.substring(error+1,html.length);
        }

        return html
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
            <div className="Speed-para">{para}</div><br/>
            <input type="text" onChange={e => updateText(e.target.value)} />
        </div>
    );
}

export default Speed;