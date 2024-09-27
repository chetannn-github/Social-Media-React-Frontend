
const useSignup = () => {
    // return a function which takes inputs and make an api call and return user info 
    // set user data to local storage and redux store . 
    
    const Signup = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/auth/signup",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify(),
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return Signup;
    


}

useSignup();