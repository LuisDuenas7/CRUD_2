import axios from "axios"

// This its the create user service.

const createUser=async(data)=>{
    
const URL='https://users-crud1.herokuapp.com/users/'

const request=await axios.post(URL,data)

return request
}

export default createUser