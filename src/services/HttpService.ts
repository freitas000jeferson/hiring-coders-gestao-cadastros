import axios from 'axios';

const api=axios.create({
    baseURL:'https://backend-example-hiring-coders.herokuapp.com/api/v1/',
})

export default api;