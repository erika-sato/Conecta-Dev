import axios from '../utils/axios'

class AuthService {

    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/home/login', { email, password })
            .then((response) => {
              if (response.data.user) {
                this.setToken('JWT');
                resolve(response.data.user);
              } else {
                reject(response.data.error);
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
    
      

    signinWithToken = () => {
        return new Promise((resolve, reject) => {
            axios
            .post('/api/home/me')  //envio o token pelo header
            .then(response => {
                if(response.data.user) {
                    resolve(response.data.user)
                } else {
                    reject(response.data.error)
                }
            }) .catch((error) => {
                reject(error)
            })
       
        })
    }

    signOut = () => {
      this.removeToken()
    }

    setToken = (token) => {
        localStorage.setItem("accessToken", token)   //json.stringfy para obter o valor do OBJ no localStorage     //1º parâmetro é uma key, e o 2º é o valor que quero armazenar no meu navegador
    }

    getToken = () => localStorage.getItem("accessToken")
        
    removeToken = () => localStorage.removeItem("accessToken")

    isAuthenticated = () => !!this.getToken()

}

const authService = new AuthService()
export default authService