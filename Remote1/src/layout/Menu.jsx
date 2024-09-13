import { Link } from 'react-router-dom'
// import env from '../service/env'

const Menu = () => {
  return (
    <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="contact">Contact</Link></li>
    </ul>
  )
}

export default Menu