import "./styles.scss"
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img alt="logo" src="/src/assets/logo.svg"/>
        </div>
        <div className="nav-buttons">
            <div>Home</div>
            <div>Page 1</div>
            <div>Page 2</div> 
        </div>
        <div className="menu-button">
            <IoIosMenu/>
        </div>
    </div>
  )
}

export default Navbar