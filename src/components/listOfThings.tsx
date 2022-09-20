import React from "react";
import Repeat from "./repeat";

function ListOfTenThings(){

    return (
        <Repeat numTimes={6}>
            {(index:number)=><div key={index}>This is item {index} in list</div>}
        </Repeat>
    )
}

export default ListOfTenThings;