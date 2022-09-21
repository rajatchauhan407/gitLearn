function useValidate():any{
 
    function checkEmail(email:string):boolean{
        if(email.includes("@")) return true;
        return false;
    }
    return {
        checkEmail
    }
}

export default useValidate;