import { Link } from "react-router-dom"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="p-2 flex justify-between w-full bg-slate-300 font-semibold"
    >
      <h1 className="text-2xl font-bold">
        <Link to="/">Bethezank</Link>
      </h1>
      <Menu />
    </nav>
  )
}

export default Navbar