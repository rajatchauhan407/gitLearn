import React,{useImperativeHandle, useRef} from "react";

function FancyCode(props:any,ref:any):JSX.Element{
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref,()=>({ 
        focus : ()=>{
            inputRef.current?.focus();
        }  
      }));
    return (
        <>
            <input 
            placeholder="FancyCode"
                ref={inputRef}
                type="text"
            />   
        </>
    )
}

export default React.forwardRef(FancyCode);