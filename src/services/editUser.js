import axios from "axios"

// This its the edit user service, recives the id and the edit information object from the cardUser(id), and the data from createUserForm.

const editUser= async (id,data)=>{


const URL=`https://users-crud1.herokuapp.com/users/${id}/`
const request= await axios.put(URL,data)
return request
}

export default editUser