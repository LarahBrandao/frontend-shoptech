import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend-shoptech-production.up.railway.app/",
});

export default instance;
