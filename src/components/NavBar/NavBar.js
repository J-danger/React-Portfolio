import React, {Component} from "react"
import { NavLink } from "react-router-dom";
import Github from "../../images/github.png"
import Linkedin from "../../images/linkedin.png"
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
                <a href="https://github.com/J-danger" target="_blank"> 
                <img className="NavBarIcons" src={Github} height="75px" width="75px">
                </img>
                </a>
                 <a href="https://www.linkedin.com/in/stephen-howe-23a581127/" target="_blank"> 
                <img className="NavBarIcons" src={Linkedin} height="75px" width="75px">
                </img>
                </a>
                </div>

                
                
                
                
            </div>
        )
    }
}
 
export default NavBar;