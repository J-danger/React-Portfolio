import React, { Component } from "react"
import Particles from "react-particles-js";
import ContactForm from "../../components/ContactForm/ContactForm"
import NavBar from "../../components/NavBar/NavBar"
import "./Contact.css"

class Contact extends Component {


  render(){
  return (
    <>
      <div className="layer">
        <NavBar/>
          <div id="contact-form">
            <div className="animated fadeIn slow">          
              <ContactForm />
            </div>          
          </div>         
      </div>
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
    
  
  </>
  )
}
}
 
export default Contact;