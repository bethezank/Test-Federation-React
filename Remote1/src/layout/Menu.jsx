import { Link } from 'react-router-dom'
import env from '../service/env'

const Menu = () => {
  return (
      <ul>
        <li><Link to={env('VITE_SITE_URL')}>Home</Link></li>
        <li><Link to={`${env('VITE_SITE_URL')}/about`}>About</Link></li>
        <li><Link to={`${env('VITE_SITE_URL')}/contact`}>Contact</Link></li>
      </ul>
  )
}

export default Menu