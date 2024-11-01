import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success")
  };

  const handleClearClick = () => {
    let newText = ""
    setText(newText);
    props.showAlert("Text Cleared","Success")
  };

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success")
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","Success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Handled","Success")
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className = "container" style = {{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style = {{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="dark"?"white":"black"}}
          id="myBox"
          rows="8"
        ></textarea>
        
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        
      </div>
    </div>
    <div className="container my-3" style = {{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} Words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
