import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import Particles from "react-particles-js";
import "./Home.css"
 
function Home(props) {
  return (    
         
   <>
    <div className="layer">
      <NavBar/> 
      <div id="aboutMe-container">
    {/* <div className="animated fadeIn fast"> */}

      <h1>test</h1>
      {/* </div> */}
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
 
export default Home;