import axios from "axios"

const api = axios.create({
    baseURL: `http://${global.location.hostname}:3333`
})

export default api;