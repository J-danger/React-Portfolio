import React, { Component } from "react"
import Home from "../Home/Home"
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
  
      
      <Popup  
      text='Welcome to my Portfolio!'  
      closePopup={this.togglePopup.bind(this)}        
      />       
      
      
      : null  
    }  
    
   </>
  )
}
}
 
export default Landing;