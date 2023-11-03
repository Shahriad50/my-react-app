import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('')
    const [searchWord, setSearchWord] = useState('');
  const [wordCount, setWordCount] = useState(0);
    const handUpclick=()=>{
        // console.log("UpperCase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handLoclick=()=>{
        // console.log("UpperCase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnchange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handClearclick=()=>{
        setText("");
    }
    const findWord=(e)=>{ 
        // setSearchWord(e.target.value);
        
        const words=text.split(" ");
        // console.log(words)

        let count=0;
        for(let i=0;i<words.length;i++){
            if(words[i]===searchWord){
                count++;
            }
        }
        setWordCount(count);
        // console.log(`The word "${searchWord}" occurs ${wordCount} times in the text.`);
        // console.log(wordCount)
            
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text has been copied in clipboard','success')
    }

    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    
  return (
    <>
            
        <div className=" container my-3">
           
         <label htmlFor="mybox" className="form-label"> <h1>{props.headingLine}</h1></label>
         <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} rows="7">
            
         </textarea>
         <button type="button" className="btn btn-primary mx-2 my-3" onClick={handUpclick}>Change To UpperCase</button>
         <button type="button" className="btn btn-danger mx-2 my-3" onClick={handClearclick}>Clear Text</button>
         <button type="button" className="btn btn-secondary mx-2 my-3" onClick={handLoclick}>Change To LowerCase</button>
         <button type="button" className="btn btn-warning mx-2 my-3" onClick={removeExtraSpace}>remove extra spaces</button>
        
         <button className="btn btn-success mx-2 my-3" type="button" onClick={handleCopy}>Copy to clipboard</button>

        </div>
        <div className="container my-3">
            <h2 >Find a word and it's utility</h2>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}/>
            <button className="btn btn-outline-success my-3" type="button" onClick={findWord}>Search</button>

           {text && searchWord && <p>{`The word "${searchWord}" occurs ${searchWord?wordCount:0} times in the text.`}</p>}
            
        </div>
        <div className="container my-3">
            <h1>Your Text Summary </h1>
            <p><b>{text.split(" ").length-1} </b>words and <b>{text.length}</b> characters</p>
            <p ><b>{Math.round(0.008*text.split(" ").length*1000)/1000-0.008} </b>Minutes to read </p>

            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        {/* <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"onChange={toggleTheme}/>
         <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
    </div> */}
        

    </>
  )
}

