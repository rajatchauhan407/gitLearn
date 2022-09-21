import React from 'react';

type AppProps = {
    person:string
}

function Greeter(props:AppProps):JSX.Element{

    return(
        <h1>Hello! {props.person}... How are you buddy?</h1>
    )
}


export default Greeter;