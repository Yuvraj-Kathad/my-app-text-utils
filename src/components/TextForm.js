import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  
  const [text, setText] = useState("");

  const handleUpClick=()=>{
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase",'success')
  }
  const handleLoClick=()=>{
    // console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase",'success')
  }
  const handleClearClick = ()=>{
    setText('');
    props.showAlert("Text Cleared!",'success')
  }
  const handleCopy = ()=>{
    var copytext = document.getElementById("myBox");
    copytext.select();
    // copytext.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("Copied to Clipboard!",'success')
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!",'success')
  }
  const handleOnChange=(event)=>{
    // console.log("Text Updated");
    setText(event.target.value)
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">{props.textArea}</label> */}
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extraa Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>

    </div>

    <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.length===0?'0':text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{0.008*text.trim().split(/\s+/).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter your text in the above box to preview it here."}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    textArea: PropTypes.string
}

// TextForm.default = {
//     heading: 'Text Heading',
//     textArea: 'Text Area'
// }