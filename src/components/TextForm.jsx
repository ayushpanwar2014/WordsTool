import React, {useState} from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {

    
    const [text, setText] = useState("");



    const handleUpClick = () => {

        console.log("Clicked For Uppercase");
        
        let newtext = text.toLocaleUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uperrcase","success");
        
    }
    
    const handleLoClick = () => {
        
        console.log("Clicked For Lowercase");
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerrcase","success");
    }
    
    const handleClearClick = () => {
        
        console.log("Clear");
        let newText = "";
        setText(newText);
        props.showAlert("Clear","success");
        
    }
    
    const handleUpLetterClick = () => {
        
        console.log("First Letter Upper");
        
        let newText = text;
        let update = newText[0].toLocaleUpperCase() + newText.slice(1)
        setText(update);
        props.showAlert("First letter Converted","success");
        
    }
    
    const handleReverseClick = () => {
        
        console.log("Reversed String");
        
        let newtext = "";
        
        for( let i = text.length - 1; i >= 0 ; i--){
            
            newtext += text[i];
            
        }
        
        setText(newtext);
        
        props.showAlert("Reversed the Text","success");
        
    }
    
    const handleCopyClick = () => {
      
        navigator.clipboard.writeText(text);

        props.showAlert("Copy to ClipBoard","success");
    }
    
    const handleSpaceClick = () => {
        
        let newText = text.split(/[ ]+/);
        
        setText(newText.join(" "));

        props.showAlert("Extra Spaces Removed","success");
    }
    
   
   
   const handleOnChange = (event) => {
       
       console.log("On cahnge");
       setText(event.target.value);
       
    }

    return (

        <>

            <div className="container my-5" style={{color : props.mode === 'light'?'black':'white' }}>    
                        <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox"  rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#042743',
                color : props.mode === 'light'?'black':'white'}} ></textarea>
                
                </div>

                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`} type="submit"  onClick={handleUpClick} > Click For Uppercase </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`} type="submit"  onClick={handleLoClick} > Click For LowerCase </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`} type="submit"  onClick={handleClearClick} > Click To Clear Text </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`}  type="submit"  onClick={handleUpLetterClick} > First letter Uppercase </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`}  type="submit"  onClick={handleReverseClick} > Reverse Words </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`} type="submit"  onClick={handleCopyClick} > Copy Clipboard </button>
                    <button disabled = { text.length == 0 } className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} my-2 mx-2`}  type="submit"  onClick={handleSpaceClick} > Remove Spaces </button>

                
            </div>

            <div className="container my-3 " style={{color : props.mode === 'light'?'black':'white' }} >

                <h2>Your Text Summary</h2>

                <p>{text.split(/\s+/).filter((element) => { return element.length != 0}).length } words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length != 0}).length} Minute Read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text: "Nothing to Preview it"}</p>

            </div>



        </>
  )

}

TextForm.propTypes = {
   heading: propTypes.string.isRequired,
   upper: propTypes.string.isRequired
}

TextForm.defaultProps = {

    heading: 'Set Heading',
    upper: 'Set Button Name'

}