import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://localhost:5001/api/jobs`
    })
}

