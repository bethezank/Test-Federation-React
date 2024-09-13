import { Suspense } from "react"
import { Outlet } from "react-router-dom"

// import Menu from "./Menu"

const MainLayout = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      {/* <Menu /> */}
    </>
  )
}

export default MainLayout