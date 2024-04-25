import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handlespace = ()=>{
        let newText = text.replaceAll(' ', '');
        setText(newText);
        props.showAlert("All spaces are removed", "success");
    }
    const handledigit = ()=>{
        let newText = text.replaceAll(/\d/g,'');
        setText(newText);
        props.showAlert("Digit removed", "success");
    }
    const handleextra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handlecopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className={`form-control border border-${props.mode==='dark'?'danger':'success'} border-4`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handleClick}>Clear Text</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handlecopy}>Copy Text</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handlespace}>Remove Space</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handledigit}>Remove Digit</button>
    <button className={`btn btn-outline-${props.mode==='dark'?'warning':'primary'} border-2 mx-2`} onClick={handleextra}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  )
}


