import React, {Component} from "react"
import { Link } from "react-router-dom";
import "./NavBar.css"
 
class NavBar extends Component {
    render(){
        return (
            <div id="NavBar">
                <div id="NavBarLinks-container">
                    <Link 
                        to="/Home" 
                        className="NavBarLinks"
                    
                    >
                        About                       
                    </Link>
                    <Link 
                        to="/Projects" 
                        className="NavBarLinks"
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/Contact" 
                        className="NavBarLinks"
                    >
                    Contact
                    </Link>
                </div>
            </div>
        )
    }
}
 
export default NavBar;