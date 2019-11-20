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
        <div className="animated fadeIn slow">
          <div id="contact-form">

        <ContactForm />
        </div>
          {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" rows="5" id="message"></textarea>
            </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form> */}
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