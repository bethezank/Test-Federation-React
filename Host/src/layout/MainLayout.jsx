import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Navbar from "./Navbar"


const MainLayout = () => {

  const auth = useAuth()

  return (
    <>
      <Navbar />
      Host app auth = {auth ? 'ok' : 'no'}
      <Outlet />
    </>
  )
}

export default MainLayout