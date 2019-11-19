import React from "react"
import Particles from "react-particles-js";
import NavBar from "../../components/NavBar/NavBar"

function Contact(props) {
  return (
    <>
      <div class="layer">
        <NavBar/>


        {/* contact form */}
          <h1>Contact</h1>




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
 
export default Contact;