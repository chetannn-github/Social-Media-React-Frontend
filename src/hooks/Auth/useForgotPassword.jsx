
const useForgotPassword = () => {
    // return a function which takes inputs and make an api call and return user info 
    // set user data to local storage and redux store . 
    
    const ForgotPassword = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/auth/forgot-password",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return ForgotPassword;
    


}

useForgotPassword();