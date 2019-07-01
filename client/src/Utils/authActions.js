import axios from 'axios'
import setAuthToken from './setAuthToken'
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => {
  axios
    .post("/register", userData)
    .then(res => history.push("/login"))
    .catch(err => console.log(err))
}

export const loginUser = loginData => {

  axios
    .post('/login', loginData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      //setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded)
    })
    .catch(err => console.log(err))
}

export const logoutUser = () => {
  //
}

