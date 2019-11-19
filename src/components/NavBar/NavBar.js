import React, {Component} from "react"
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home/Home"
import "./NavBar.css"
 
class NavBar extends Component {
    render(){

        
        return (
            <div id="NavBar">
            
                <div id="NavBarLinks-container">
                    <NavLink 
                        to="/Home" 
                        className="NavBarLinks"
                        activeClassName="active"
                    >
                        About                       
                    </NavLink>
                    <NavLink 
                        to="/Projects" 
                        className="NavBarLinks"
                        activeClassName="active"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/Contact" 
                        className="NavBarLinks"
                        activeClassName="active"
                    >
                    Contact
                    </NavLink>
                </div>
            </div>
        )
    }
}
 
export default NavBar;