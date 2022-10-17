import { createContext, useState } from 'react'; 

export const ContextLogin = createContext(null);

export const LoginContextProvider = ({children}:any) => {
  const [auth, setAuth] = useState(false)

  const values = { auth, setAuth }
  
  return (
    <ContextLogin.Provider value={values}>{children}</ContextLogin.Provider>
  )

}

export default LoginContextProvider