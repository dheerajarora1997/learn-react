import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpperClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.initAlert('Converted to Uppercase','primary')
    }
    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.initAlert('Converted to Lowercase','warning')
    }
    const handleCapitalizeClick = () => {
        alert('Capitalization is still pending');
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.initAlert('Extra space removed','secondary')
    }
    const handleCopyClick = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.initAlert('Copied to Clipboard','success')
    }
    const handleClearClick = () => {
        setText('');
        props.initAlert('Textarea Cleared','danger')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="my-3">
                <h4 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h4>
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="d-flex">
                <button type="button" onClick={handleUpperClick} className="me-3 btn btn-primary">Convert to Uppercase</button>
                <button type="button" onClick={handleLowerClick} className="me-3 btn btn-warning">Convert to Lowercase</button>
                <button type="button" onClick={handleCapitalizeClick} className="me-3 btn btn-info">Convert to Capitalize</button>
                <button type="button" onClick={handleExtraSpace} className="me-3 btn btn-secondary">Remove Extra Space</button>
                <button type="button" onClick={handleCopyClick} className="me-3 btn btn-success">Copy to Clipboard</button>
                <button type="button" onClick={handleClearClick} className="ms-auto btn btn-danger">Clear</button>
            </div>
            <div className={`justify-content-between mt-3 align-items-center d-${text.length == '0' ? 'none' : 'flex'}`}>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.split(" ").length} Words, {text.length} Characters</p>
                <span className="badge rounded-pill bg-secondary">{0.008 * (text.split(" ").length)} Minutes to read</span>
            </div>
            <div className={`d-${text.length == '0' ? 'none' : 'block'}`}>
                <h4 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h4>
                <code className={`rounded d-block p-3 bg-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    {text}
                </code>
            </div>
        </>
    )
}
