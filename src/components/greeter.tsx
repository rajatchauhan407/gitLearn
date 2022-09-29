import React from 'react';

type AppProps = {
    person:string,
    handleExpense:Function
}


function Greeter(props:AppProps):JSX.Element{
    function onExecuteChild(){
        props.handleExpense("Rajat");
    }
    return(<>
    <h1>Hello! {props.person}... How are you buddy?</h1>
    <button onClick={onExecuteChild}>child</button>
    </>
        
    )
}


export default Greeter;