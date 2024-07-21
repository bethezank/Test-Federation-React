import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const auth = true

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}