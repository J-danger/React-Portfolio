import React from "react";  
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import logo from "../../images/project3.png"
import "./Popup.css";  



class Popup extends React.Component {  

  render() {  
return (   
<>
<Particles
params={{
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#FF0000",
                blur: 10,
                width: "2px;"
            }
        }
    },
    polygon: {
        draw: {
            stroke: {
                color: ["#FF0000", "#FFFFFF" ]
            }
        }
    }
}}
style={{
    width: "100%",
    // backgroundImage: `url(${logo})` 
    color: "red"
  }}
/>
<div className="popup">  
    <div className="popup\_inner">  
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="animated flipInX slow">
                <h1 className="display-4">{this.props.text}</h1>
            </div>
            <div className="animated fadeInLeft slow">
                <p className="lead">
                    <span className="animated fadeIn slower">Stephen Howe |</span> 
                    <span className="animated bounceInLeft fast"> Full Stack Web Developer</span>
                               
                </p>
            </div>
            <div className="animated fadeInRight slow">
                <div className="hvr-buzz-out  ">
                    <Link to="/home" className="submit" onClick={this.props.closePopup}>Check it out</Link>  
                </div>
            </div>
        </div>

    </div>
    </div>  
</div>  

</>
);  
}  
}  

export default Popup;