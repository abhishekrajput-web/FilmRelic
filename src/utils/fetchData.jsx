import axios from "axios";

const BaseUrl = "https://api.themoviedb.org/3";
const apiKey = YOUR_API_KEY;


const fetchMovies = async (url) => {
    const {data} = await axios.get(`${BaseUrl}/${url}&api_key=${apiKey}`);
    return data;
}

export default fetchMovies;

