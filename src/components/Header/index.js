// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul className="header-container">
      <li>
        <Link to="/" className="list-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list-item">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
