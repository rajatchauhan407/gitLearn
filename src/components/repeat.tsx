import React from 'react';


function Repeat(props:{numTimes:number,children:any}):JSX.Element{
let items = [];


for(let i =0; i<props.numTimes; i++){
    items.push(props.children(i));
}

return <div>
    {items}
</div>
}

export default Repeat;