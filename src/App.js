
import './App.css';
import CreateUserForm from "./components/createUserForm";
import {useEffect, useState} from 'react'
import createUser from './services/createUser';
import getUsers from './services/getUsers';
import CardUser from './components/cardUser';
import deleteUser from './services/deleteUsers';
import editUser from './services/editUser';


function App() {


//=========================States=========================================================================================== 
  const[deleteId,setDeleteId]=useState('')
  const[editId,setEditId]=useState('')
  const[users,setUsers]=useState([])
  const[createUsers,setCreateUser]=useState({})
  const[editValues,setEditValues]=useState({})
  const[editNewValues,setEditNewValues]=useState({})
  
// ==========================Get Users useEffect============================================================================

  useEffect(()=>{
    getUsers()
      .then((res)=>{
        
        setUsers(res.data)
      })
  },[])

// =================================Create User useEffect & Handlers=====================================================================

  useEffect(()=>{
    if(createUsers.email){
        createUser(createUsers)
          .then((res)=>{
            
             setUsers([...users,res.data])
             setCreateUser({
              "birthday": res.data.birthday,
              "email": res.data.email,
              "password": res.data.password,
              "first_name": res.data.first_name,
              "last_name": res.data.last_name
                   })
     
                       setCreateUser({})
          })
    }
  },[createUsers,users])


  const handleCreateUser=(e)=>{
    setCreateUser(e)                                   
                                   
     }

// ============================Delete UseEffect & Handlers=================================================================================
  
  useEffect(()=>{
    if(deleteId){
       deleteUser(deleteId)
        .then(()=>{
          setUsers(filterUsers(deleteId))
    
        })
    }
  },[deleteId])


  const handlerOnDelete=(e)=>{
    setDeleteId(e)               // Id for deleteUser service
  }  

// ===================================Edit Use Effect & Handlers===================================================================================
   useEffect(()=>{
     if(editNewValues.email){
       editUser(editId,editNewValues)
       .then((res)=>{
         setUsers([...filterUsers(editId),res.data])
         setEditNewValues({})
       })
    }

   },[editId,editNewValues])


   const handlerOnEdit=(e)=>{
    setEditId(e.id)    // ID for editUser service
    setEditValues(e)   // Actual values on cardUser for use un createUserForm
    
  }

  const handleEdit=(e)=>{
    setEditNewValues(e)  // New values to edit the cardUser on the server trough the editUser service
     }

// =====================================Filter============================================================================================


const filterUsers=(id)=>{
  const arr= users.filter((users)=> id !== users.id)
  return arr
}


// ================================List of users==============================================================================================
  const usersList= users.map((item)=> <CardUser onDelete={handlerOnDelete} usersObj={item} onEdit={handlerOnEdit} key={item.id} />) 

// ================================Return Main App============================================================================================
  return (
    <div className="App">
      
        <CreateUserForm onCreate={handleCreateUser} editValues={editValues} onEdit={handleEdit} />
       <div className='info-box'> 
        {usersList}
        </div>
    </div>
  );
}

export default App;
