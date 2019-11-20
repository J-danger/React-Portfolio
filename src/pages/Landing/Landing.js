import React, { Component } from "react"
import Particles from "react-particles-js";
import Popup from "../../components/Popup/Popup"
import "./Landing.css"

 
class Landing extends Component{
  state = {     
    showPopup: true
  };



  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     } 

  render(){
  return (

  <>    
    {this.state.showPopup ?  
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
        },
        interactivity: {
      events: {
        onresize: {
          enable: true,
          density_auto: true,        
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
      <Popup  
      text='Welcome to my Portfolio'  
      closePopup={this.togglePopup.bind(this)}        
      />       
      
    </>
      : null  
    }  
    
   </>
  )
}
}
 
export default Landing;