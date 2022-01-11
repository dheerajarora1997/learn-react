import React, { useState } from 'react'
import Alert from './Alert';


export default function TextForm(props) {

    const { mode, heading } = props;

    const [text, setText] = useState('');

    const [alert, setAlert] = useState(null);

    const initAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    const handleUpperClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        initAlert('Converted to Uppercase', 'primary')
    }
    const handleLowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        initAlert('Converted to Lowercase', 'warning')
    }
    const handleCapitalizeClick = () => {
        window.alert('Capitalization is still pending');
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        initAlert('Extra space removed', 'secondary')
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        initAlert('Copied to Clipboard', 'success')
    }
    const handleClearClick = () => {
        setText('');
        initAlert('Textarea Cleared', 'danger')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <Alert alert={alert} />
            <div className="container">

                <div className="my-3">
                    <h4 className={`text-${mode === 'dark' || mode === 'secondary' ? 'light' : 'dark'}`}>{heading}</h4>
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleUpperClick} className="mb-2 btn btn-primary" disabled={text.length === 0}>Convert to Uppercase</button>
                    </div>
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleLowerClick} className="mb-2 btn btn-warning" disabled={text.length === 0}>Convert to Lowercase</button>
                    </div>
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleCapitalizeClick} className="mb-2 btn btn-info" disabled={text.length === 0}>Convert to Capitalize</button>
                    </div>
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleExtraSpace} className="mb-2 btn btn-secondary" disabled={text.length === 0}>Remove Extra Space</button>
                    </div>
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleCopyClick} className="mb-2 btn btn-success" disabled={text.length === 0}>Copy Text to Clipboard</button>
                    </div>
                    <div className="col-6 col-sm-2 text-sm-center">
                        <button type="button" onClick={handleClearClick} className="ms-auto btn btn-danger" disabled={text.length === 0}>Clear Text</button>
                    </div>
                </div>
                <div className={`justify-content-between mt-3 align-items-center d-${text.length === 0 ? 'none' : 'flex'}`}>
                    <p className={`text-${mode === 'dark' || mode === 'secondary' ? 'light' : 'dark'}`}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words, {text.length} Characters</p>
                    <span className="badge rounded-pill bg-secondary">{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Minutes to read</span>
                </div>
                <div className={`d-${(text.length) === 0 ? 'none' : 'block'}`}>
                    <h4 className={`text-${mode === 'dark' || mode === 'secondary' ? 'light' : 'dark'}`}>Preview</h4>
                    <code className={`rounded d-block p-3 bg-${mode === 'dark' ? 'light' : 'dark'}`}>
                        {text}
                    </code>
                </div>
            </div>
        </>
    )
}
