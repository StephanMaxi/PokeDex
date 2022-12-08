import axios from "axios";

const backendapi = axios.create({
            baseURL:  "http://localhost:8080/api/v1"
});

export default backendapi