import React from "react";  
import { Link } from "react-router-dom";
import "./Popup.css";  



class Popup extends React.Component {  

  render() {  
return (   
<>

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