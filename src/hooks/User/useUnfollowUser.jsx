
const useUnfollowUser = () => {
    
    
    const UnfollowUser = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/user/",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return UnfollowUser;
    


}

useUnfollowUser();