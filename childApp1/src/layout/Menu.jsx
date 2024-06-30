import { Link } from 'react-router-dom'

const Menu = () => {
  return (
      <ul>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}`}>Home</Link></li>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}/about`}>About</Link></li>
        <li><Link to={`${import.meta.env.VITE_SITE_URL}/contact`}>Contact</Link></li>
      </ul>
  )
}

export default Menu