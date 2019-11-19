import React from "react"
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
      <NavBar />
      <h1>Projects</h1>
      <div className="cards">
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
  )
}
 
export default Projects;