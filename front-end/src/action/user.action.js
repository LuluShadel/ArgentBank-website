



export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_USER_FAILDED = "LOGIN_USER_FAILDED"
export const LOGIN_USER_SUCCES = "LOGIN_USER_SUCCES"
export const LOGOUT_USER = "LOGOUT_USER"
export const USER_PROFILE = "USER_PROFILE"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const NEW_USER="NEW_USER"

export const userLoginSuccess = () => ({
    type: LOGIN_USER,
  });


  //gestion reussite connexion 

  export const loginUserSucces = () => ({
    type : LOGIN_USER_SUCCES
  })


  // gestion erreur connexion 

  export const loginUserFailed = (errorMessage) =>({ 
  
      type: LOGIN_USER_FAILDED,
      payload: errorMessage,
    });

  // gestion de la deconnexion
  export const logoutUser = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token")
    return {
      type: LOGOUT_USER,
    };
  };


// recuperation du profile
  export const userProfile = () => ({
    type : USER_PROFILE
  })

  //changement du userName 

  export const updateProfile =() => ({
    type : UPDATE_PROFILE
  })

  //nouvel utilisateur 

  




// connexion 
export const loginUser=(email,password,navigate,rememberMe) => {
    
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
                if (rememberMe) {
                localStorage.setItem('token', token);
                }
                else {
                    sessionStorage.setItem('token',token)
                }
                navigate('/Profile');
                dispatch (loginUserSucces())
                dispatch(fetchUserProfile())
                  
            }
            
            }
            catch {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token")
                const errorMessage = "Invalid email or password"
                dispatch(loginUserFailed(errorMessage))
                console.log("mdp or email invalid")
            }    
        
    }
    }


    // récupération du profile connecter grâce au token 

    export const fetchUserProfile = () => {
      return async (dispatch) => {
        let token = localStorage.getItem("token");
    
        if (!token) {
          token = sessionStorage.getItem("token");
        }
    
        if (!token) {
          return;
        }
    
        try {
          const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method:'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
    
          if (response.status === 200) {
            const data = await response.json()
           
            dispatch({
              type: USER_PROFILE,
              payload: data.body,  // ajout du profil dans le store
            });
            
          }
        } catch (error) {
          console.error(error);
        }
      };
    };



    // changement de userName 

    export const changeUserName = (newUserName) => {

      return async (dispatch) => {
        let token = localStorage.getItem("token");
    
        if (!token) {
          token = sessionStorage.getItem("token");
        }
    
        if (!token) {
          return;
        }

        

        try {

          const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method:'PUT',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userName: newUserName
              })
            }
          )

          if (response.status === 200) {
            const data = await response.json()
            
            dispatch({
              type: UPDATE_PROFILE,
              payload: data.body,  // modification du profile dans le store 
            });

        }
      } catch (error) {
        console.error(error);
      }


    }
  }


  // nouvelle utilisateur 

  export const newUser=(email,password,lastName,firstName,userName) => {
    
    return async (dispatch) => {


        const userData = {
            email,
            password,
            lastName,
            firstName,
            userName,
        };
        
        try {
        
            const response = await fetch("http://localhost:3001/api/v1/user/signup", {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                

            })
            const data = await response.json();
            

            if (response.status===200) {
                console.log(data, "fetch sign up ok ")
                  
            }
            
            }
            catch {
                console.error("error sign up")
            }    
        
    }
    }