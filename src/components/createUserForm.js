import { useEffect} from "react";
import { useForm } from "react-hook-form"
import {IoPersonAddSharp } from "react-icons/io5";
import {IoMail } from "react-icons/io5";
import {IoLockClosed } from "react-icons/io5";
import {IoCalendar } from "react-icons/io5";


const CreateUserForm=({onCreate,editValues,onEdit})=>{

const defaultValues= {first_name:"",last_name:"",email:"",password:"",birthday:""}   //This sets the inputs at empty fields after we create a user


const{register,handleSubmit,reset}=useForm()

// ========This useEffect sets the editValues on the inputs to see and edit the information with the help of reset.
useEffect(()=>{
    if(editValues){
        reset(editValues)
        
         }
},[editValues,reset])

// This onSubmit hands the onEdit and the onCreate information to the respectives services.

const onSubmit= (res)=>{
       if(editValues.id) {                  //These values ​​are changed by the edit or finish buttons on the cardUser.js.
           onEdit(res)
                                  
                   }
       else
       {onCreate(res)
        reset(defaultValues)   //here we reset the inputs fields.
    }
    }


   

return(
<div className="create-form">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="inputs">   
  <label htmlFor="name"> <IoPersonAddSharp className="icon-1"/> </label>
  <input required id="name" {...register('first_name')} placeholder='First Name'/>
  <input required id="lastName" {...register('last_name')} placeholder='Last Name'/>

  <label htmlFor="email"><IoMail className="icon-1"/></label>
  <input required id="email" type="email" {...register('email')} placeholder='Email'/>

  <label htmlFor="password"><IoLockClosed className="icon-1"/></label>
  <input autoComplete="new-password" required id="password" {...register('password')} placeholder='Password' type="password"/>

  <label htmlFor="date"><IoCalendar className="icon-1"/></label>
  <input required id="date" {...register('birthday')} type="date"/>
</div>  

<div className="button-cont">

    {/*This conditional its used to change the input button with the two options: Edit or Create */}
 {editValues.id ? <input className="button-edit" type='submit' value='Edit'/>: <input className="button" type='submit' value='Create'/> }
</div>  



 </form>
</div>
   
)

}

export default CreateUserForm
