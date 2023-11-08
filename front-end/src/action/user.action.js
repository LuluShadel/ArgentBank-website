


export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_USER_FAILDED = "LOGIN_USER_FAILDED"
export const LOGIN_USER_SUCCES = "LOGIN_USER_SUCCES"

export const userLoginSuccess = () => ({
    type: LOGIN_USER,
  });


  //gestion reussite connexion 

  export const loginUserSucces = () => ({
    type : LOGIN_USER_SUCCES
  })


  // gestion erreur connexion 

  export const loginUserFailed = () => ({
    type : LOGIN_USER_FAILDED, 
  })


  



// connexion 
export const loginUser=(email,password,navigate) => {
    
    return async (dispatch) => {


        const userData = {
            email,
            password,
        };
        
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                

            })
            const data = await response.json();
            const token = data.body.token;

            if (response.status===200) {
                localStorage.setItem('token', token);
                navigate('/Profile');
                dispatch (loginUserSucces())
                console.log(data)
                
                
            }
            else if (response.status === 400)  {
                alert("Invalid email or password")
                localStorage.removeItem("token");
                dispatch (loginUserFailed())
                
              }
             
             } catch (error) {
                console.error('Erreur lors de la connexion :', error);
             }

    }
    }
