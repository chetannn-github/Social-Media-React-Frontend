
const useSendFollowRequest = () => {
    
    
    const SendFollowRequest = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/request/",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            credentials:"include",
            mode:"cors"
        })
        
    

    }

    // return SendFollowRequest;
    


}

useSendFollowRequest();