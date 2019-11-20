import React from "react"
import Particles from "react-particles-js";
import Thumbnail from "../../components/Thumbnail/Thumbnail"
import project3 from "../../images/project3.png"
import clicky from "../../images/clicky.png"
import webscrape from "../../images/webscraper.png"
import burger from "../../images/burger.png"
import NavBar from "../../components/NavBar/NavBar"
import "./Projects.css"

function Projects(props) {
  return (
    <div>
      <div className="layer">
      <NavBar />
      <div className="animated fadeIn fast">
      <div className="cards-container">
        <div className="centerwrapper">
        <Thumbnail
          link="https://infinite-eyrie-10837.herokuapp.com"
          image={project3}
          title="Stack Underflow"
          category="A MERN Stack forum for web dev beginners"
        />
        <Thumbnail
          link="https://j-danger.github.io/Clicky-game/"
          image={clicky}
          title="Clicky Game"
          category="A memory game using states in React "
        />
        <Thumbnail
          link="https://frightening-eyeballs-04450.herokuapp.com/"
          image={webscrape}
          title="WebScrapper"
          category="A Coindesk Web-scrapper"
        />
          <Thumbnail
          link="https://calm-lake-18609.herokuapp.com/burgers"
          image={burger}
          title="Burger MVC"
          category="A full-stack MVC 'burger' logger"
        />
        </div>
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
    </div>

  )
}
 
export default Projects;