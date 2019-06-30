import { useEffect } from "react";
import axios from "axios";
function useLoggedIn(userObj) {
    // this is where we'll make an axios call to get logged in status via passport
    axios
        .post("/user/login", userObj)
        .then(res => {
            console.log(res, "logged in");
            if (res.status === 200) {
                return true;
            }
        })
        .catch(err => console.log(err));

    return false;
}

export default useLoggedIn;
