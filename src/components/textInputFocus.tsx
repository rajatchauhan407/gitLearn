import React,{useRef} from 'react';
import FancyCode from './fancyCode';

function TextInputFocus():JSX.Element{
    const inputEl = useRef<HTMLInputElement>(null);

    const handleFocus = ()=>{
        inputEl.current?.focus();
    }
    return(<>
        <input
            ref={inputEl}
            type="text"
        />
        <FancyCode
            ref={inputEl}
        />
    <button onClick={handleFocus}>Click to Focus </button>
    </>)
}

export default TextInputFocus;