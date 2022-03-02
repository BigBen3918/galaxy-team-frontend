import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.115.168:5000/",
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
});
