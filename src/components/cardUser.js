import {IoBrush } from "react-icons/io5";
import {IoTrash,IoBrushOutline } from "react-icons/io5";
import {FaBirthdayCake} from "react-icons/fa";
import { useState } from "react";



const CardUser=({usersObj,onDelete,onEdit})=>{

 
    const[isEditing,setIsEditing]=useState(false)        // This state its used for styles control on cardUser when push the editting button.
    

const unselect={id:"",first_name:"",last_name:"",email:"",password:"",birthday:""}    // This property its used for set onEdit objet as empty,to return the input button on createUserForm to create.

return(
    // ================Here we show the user information,retrieved and stored in user useState in the main app.js ==============================
<div className={isEditing ? "card-box1" : "card-box"}>
 
   <div className="name">
   <span>{usersObj.first_name}</span>
   <span>{usersObj.last_name}</span>     
   </div>
   <div className="info">
     <span className="text-color">{usersObj.email}</span>
     <span><FaBirthdayCake className="icon-3"/> {usersObj.birthday}</span>
   </div>
  
  <div className="edit-delete"> 
  <div className="info-icon">
      {/* This button send the user object to edit,this its recibed by a useState(setValuesEdit) in the main app.js and send to createUserForm.js */}
    <button onClick={()=> onEdit(usersObj,setIsEditing(true)) }> 
       <i><IoBrush className="icon-2"/>Edit</i>
    </button></div>   
  
    <div className="info-icon">
        {/* This button change the property of the onEdit object for a empty fields, and change the editing state to hide the finish button */}
    <button onClick={()=> onEdit(unselect,setIsEditing(false)) }>            
      { isEditing ? <i><IoBrushOutline className="icon-5"/>Finish </i> : <i><IoBrushOutline className="icon-4"/></i>  }
    </button></div> 

    <div className="info-icon"> 
    {/* Here we set's the id for delete the user selected over the deleteUsers service  */}
    <button onClick={()=> onDelete(usersObj.id)}  >               
        <i><IoTrash className="icon-delete"/>Delete</i>
    </button></div>
  </div>


</div>
)
}

export default CardUser