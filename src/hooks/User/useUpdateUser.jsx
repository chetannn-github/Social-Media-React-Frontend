
const useUpdateUser = () => {
    
    
    const UpdateUser = async(userName,password)=>{
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

    // return UpdateUser;
    


}

useUpdateUser();