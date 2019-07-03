import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function useLoggedIn() {
	const [LoggedIn, setLoggedIn] = useState(false);
	
	useEffect(() => {
		if (localStorage.jwtToken) {
			const token = localStorage.jwtToken;
	
			const decoded = jwt_decode(token);

			console.log(decoded)
	
			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds
	
			if (decoded.exp < currentTime) {
				localStorage.clear();
				setLoggedIn(false);
				window.location.href = "./login";
			} else {
				setLoggedIn(true);
			}
		}
	}, [])


  return LoggedIn;
}

export default useLoggedIn;
