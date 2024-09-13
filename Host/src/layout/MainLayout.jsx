import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Navbar from "./Navbar"
import { Suspense } from "react"


const MainLayout = () => {

  const auth = useAuth()

  return (
    <>
      <Navbar />
      Host app auth = {auth ? 'ok' : 'no'}
      <hr />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout