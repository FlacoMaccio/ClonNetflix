import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.tehmoviedb.org/3"
})

export default instance
