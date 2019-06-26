import { useState, useEffect } from "react";
import axios from "axios";

// api call takes in the type, api url, and any data values to send
const useAPI = (type, url, values) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    switch (type) {
      case "get":
        axios
          .get(url)
          .then(res => setResponse(res.data))
          .catch(err => console.log(err));
        break;

      case "post":
        axios
          .post(url, values)
          .then(res => res.data)
          .catch(err => console.log(err));
        break;

      case "put":
        axios
          .put(url, values)
          .then(res => setResponse(res.data))
          .catch(err => console.log(err));
        break;

      case "delete":
        axios
          .delete(url)
          .then(res => res.data)
          .catch(err => console.log(err));
        break;

      default:
        console.log("no type passed");
    }
  }, [type, url, values]);

  return response;
};

export default useAPI;
