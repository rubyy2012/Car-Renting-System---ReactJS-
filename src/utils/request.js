import axios from 'axios'

const userToken = localStorage.getItem('userToken')

// console.log(userToken)
const request = axios.create({
    baseURL:'https://rentalcarapi2022.azurewebsites.net/api/'
})

//METHOD GET
export const getWithToken = async (path) => {
    // console.log(userToken)
    if(userToken)
    {
        const response = await request.get(path,
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                }
            })
        return response.data
    }
}

export const get = async (path,option = {}) => {
    const response = await request.get(path,option)
    return response.data
}

//METHOD DELETE
// export const deleteById = async(path) =>
// {
//     if(userToken)
//     {
//         const response = await request.delete(path,
//             {headers:{
//                 'Authorization': `Bearer ${userToken}`,}
//             })
//         return response.data
//     }
// }

// METHOD PATCH
export const patch = async (path,data) =>
{
    if(userToken)
    {
        console.log(userToken)
        const response = await request.patch(path,data,
            {headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            }})
        return response.data
    }
}

export const patchWithFormData = async (path,data) => {
    if(userToken!==null)
    {
        const response = await request.patch(path,data,
            {headers:{
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'multipart/form-data'
            }})
        return response
    }
}
//METHOD PUT 
export const putWithFormData = async (path,data) => {
    if(userToken!==null)
    {
        const response = await request.put(path,data,
            {headers:{
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'multipart/form-data',
            }})
        return response.data
    }
} 

export const put = async (path,data) => {
    if(userToken!==null)
    {
        const response = await request.put(path,data,
            {headers:{
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }})
        return response.data
    }
} 


//METHOD POST
// export const post = async (path,data) => {
//     console.log(userToken)
//     if(userToken!==null)
//     {
//         const response = await request.post(path,data,
//             {headers:{
//                 'Authorization': `Bearer ${userToken}`,
//                 'Content-Type': 'application/json',
//                 ...data.getHeaders()
//             }})
//         return response.data
//     }
//     const response = await request.post(path,data)
//     return response.data
// } 
export const postWithFormData = async (path,data) => {
    if(userToken!==null)
    {
        const response = await request.post(path,data,
            {headers:{
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'multipart/form-data',
                // ...data.getHeaders()
            }})
        return response.data
    }
    const response = await request.post(path,data)
    return response.data
} 
export default request;

