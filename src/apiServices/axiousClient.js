import axios from 'axios';

const request = axios.create(
    {
        baseURL : 'https://localhost:7054/api/'
    }
);

export const get = async (url,option={}) => {
    const response = await request.get(url,option)
       return response.data;
}