import React, {useState} from 'react'


export default function TextForm(props) {
    const[text,setText]=useState("");

    const handelUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handelLowClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");

    }

    const handelCapClick = ()=>{
        let newText= text[0].toUpperCase()+text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert("Capitalization successful","success");

    }

    const handelCopyClick = ()=>{
        let data= document.getElementById("myBox");
        data.select();
        navigator.clipboard.writeText(data.value);
        props.showAlert("Coppied to clipboard","success");

    }

    const handelExtraSpace = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }

    const handelClearClick = ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text cleared","success");

    }

    const handelOnchange = (event)=>{
        setText(event.target.value);
    }

    const wordCount=(data)=>{
        return (data.charAt(data.split("").length-1)===" "||data.split("").length===0)?data.split(" ").length-1:data.split(" ").length;
    }
    // let wordCount = text.split(" ").length

    const btnState=(data)=>{
        if(data.length>0)
            return "";
        else
            return "disabled";
    }

    const btnColor = ()=>{
        if(props.mode==="light")
        return "primary";
        if(props.colour==="#042743")
            return "primary";
        if(props.colour==="#580000")
            return "danger";
        if(props.colour==="#003603")
            return "success";
    }

    
  return (
    <>
        <div className="container" style={{color:props.mode==="dark"?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handelOnchange} style={{backgroundColor:props.mode==="dark"?'#212529b0':'white',color:props.mode==="dark"?'white':'#042743'}} rows="5"></textarea>
            </div>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelUpClick} disabled= {btnState(text)} >Convert to Uppercase</button>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelLowClick} disabled= {btnState(text)}>Convert to Lowercase</button>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelCapClick} disabled= {btnState(text)}>Capitalize Text</button>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelCopyClick} disabled= {btnState(text)}>Copy Text</button>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelExtraSpace} disabled= {btnState(text)}>Remove Extra Space</button>
            <button className={`btn btn-${btnColor()} mx-2`} onClick={handelClearClick} disabled= {btnState(text)}>Clear Text</button>


        </div>

        <div className="container my-2" style={{color:props.mode==="dark"?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>Read time: {0.008*wordCount(text)} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here!"}</p>
        </div>
        
    </>
  )
}


