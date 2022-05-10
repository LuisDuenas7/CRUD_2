import axios from "axios"
// This its the delete user service, receives the id from cardUser button. 
const deleteUser=async (id)=>{
const URL=`https://users-crud1.herokuapp.com/users/${id}/`
const request= await axios.delete(URL)


return request
}

export default deleteUser