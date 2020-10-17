import axios from "axios"

const instance = axios.create({
    baseURL: 'https://stationary-shop-cdb45.firebaseio.com/'
})

export default instance