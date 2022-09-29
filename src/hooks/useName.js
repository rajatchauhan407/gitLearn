import React, { useState } from 'react';

// helps us to use stateful logic across different components
function useName(){
    const [fname, setName] = useState('Akansha');
    
    

    function greeting(name){
       setName(name);
       console.log(fname);
    }
    function getGreeting(){
        console.log(fname);
    }

return{
    greeting,
    getGreeting
}
};

export default useName;

