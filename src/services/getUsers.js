import axios from "axios"
// This its the get user service, retrieves the users stored in the server.
const getUsers= async()=>{

const URL='https://users-crud1.herokuapp.com/users/'
const request= await axios.get(URL)

return request
}

export default getUsers