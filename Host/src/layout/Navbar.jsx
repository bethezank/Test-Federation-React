import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="p-2 flex justify-between w-full bg-slate-300 font-semibold"
    >
      <h1 className="text-2xl font-bold">
        <Link to="/">
          Bethezank
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/App/Remote1">Remote1</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar