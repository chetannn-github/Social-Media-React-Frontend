
const useDeleteAllNotifications = () => {
    // return a function which takes inputs and make an api call and return user info 
    // set user data to local storage and redux store . 
    
    const DeleteAllNotifications = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/notification/",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return DeleteAllNotifications;
    


}

useDeleteAllNotifications();