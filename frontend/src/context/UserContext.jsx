import React, { useState } from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext(null)



const UserContext = ({children}) => {

    const [user,setUser] = useState({
        email:"",
        fullname:{
            firstname:"",
            lastname:""
        },
    })

  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
            {children}
        </UserDataContext.Provider>
      
    </div>
  )
}

export default UserContext