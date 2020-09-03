import axios from 'axios'

const get = (({url,params})=>{
    return axios({
        url,
        method : 'get',
        params
    })
    .then((resolve)=>{
        return resolve.data
    })
    .catch((err)=>{
        return err.message
    })
})

export{
    get
}