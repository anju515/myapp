import React, {useState} from 'react'

export default function Textform(props) {

  const handleonClick = () => {
  console.log ("upper case was clicked" );
  const newText = text.toUpperCase();
  setText (newText);
  }

   const handleonChange = (event) => {
   console.log ("on change" );
   setText (event.target.value);
  }

   let [text,setText] = useState("Enter text here");

  return (
    <div>
        <h1>{props.heading}</h1>
        
        <div className="mb-3">
        <textarea className="form-control" value = {text} id="mybox" onChange = {handleonChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick = {handleonClick}>Convert upper case </button>
    </div>
  )
}
