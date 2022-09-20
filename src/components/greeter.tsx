import React from 'react';

type AppProps = {
    person:string
}

function Greeter(props:AppProps):JSX.Element{

    return(
        <h1>Hello! {props.person}</h1>
    )
}


export default Greeter;