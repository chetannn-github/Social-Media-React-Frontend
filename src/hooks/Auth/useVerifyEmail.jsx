
const useVerifyEmail = () => {
    // return a function which takes inputs and make an api call and return user info 
    // set user data to local storage and redux store . 
    
    const VerifyEmail = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/auth/verify-email",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return VerifyEmail;
    


}

useVerifyEmail();