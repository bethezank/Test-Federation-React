import { useAuth } from "../hooks/useAuth"
import Navbar from "./Navbar"


const MainLayout = ({ children }) => {

  const  auth = useAuth()

  return (
    <>
      <Navbar/>
      Host app auth = {auth ? 'ok' : 'no'}
      {children}
    </>
  )
}

export default MainLayout