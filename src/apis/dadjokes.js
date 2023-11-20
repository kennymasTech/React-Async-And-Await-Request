import axios from "axios";
const BASE_URL = "http://icanhazdadjoke.com";

export default axios.create({
    baseUrl: BASE_URL,
    headers: {
        
    }
})