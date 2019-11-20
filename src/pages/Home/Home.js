import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import Particles from "react-particles-js";
import Landing from "../Landing/Landing"
import "./Home.css"
 
function Home(props) {
  return (    
         
   <>
    <div classname="layer">
      <NavBar/> 
     
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
 
export default Home;