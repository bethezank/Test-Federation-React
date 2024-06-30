import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Menu from "./Menu"

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  )
}

export default MainLayout