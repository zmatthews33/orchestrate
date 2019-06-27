import axios from "axios";

export default {
    getVenues: function(query) {
        return axios.get(
            `https://api.songkick.com/api/3.0/search/venues.json?query=${query}&apikey=avCCBGwqkhYMC132&per_page=3`
        );
    }
};

// testing -------------------------------------NODE ------------------------------------------------------------------------------------------------------------------------------------------------------------
// var axios = require('axios');
// const arr = ['query', 'done', 'poop'];

// const func = {
//      getVenue: function(...query) {
//         axios.get(URL + query.join('%20') + apiKey)
//         .then(res => console.log(res.data.results))
//         .catch(err => console.log(err));
//     }
// }

// const func = {
//      getVenue: function(...query) {
//         axios.get(URL + query.join('%20') + apiKey)
//         .then(res => console.log(res.data.results))
//         .catch(err => console.log(err));
//     }
// }

// console.log(arr.join('%20'));
