
const useLogin = () => {
    // return a function which takes inputs and make an api call and return user info 
    // set user data to local storage and redux store . 
    let userName = "test1";
    let password = "123";
    const Login = async(userName,password)=>{
        // api call 
        let res = await fetch("http://localhost:3000/api/auth/login",{
            method:"POST",
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify({userName,password}),
            credentials:"include",
            mode:"cors"
        })
        let loggedInUserInfo = await res.json();
        console.log(loggedInUserInfo);

    

    }

    // return Login;
    Login(userName,password);


}

useLogin();