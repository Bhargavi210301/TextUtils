import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleLowClick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!","success");
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("Cleared All the text!","success");
  }
  const handleRepeat=()=>{
    setText(text.repeat(2));
    props.showAlert("Repeated the text!","success");
  }
  const handleOnChange=(e)=>{
    setText(e.target.value);
  }
  

  const[text,setText]=useState('');    //text is variable & setText is update Function
  // text="new text" wront way to change the text of state
 // setText("new text");    //corect way to change the text of state


  return (
    <>
    <div className='container my-2'style={{backgroundColor:props.mode==="light"?"white":"#042743", color:props.mode==="light"?"black":"white"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"#13466e",color:props.mode==="light"?"black":"white" }} value={text} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleRepeat}>Repeat Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear All</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==="light"?"white":"#042743", color:props.mode==="light"?"black":"white"}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read the given text</p>
      <h3>Preview Of text</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
