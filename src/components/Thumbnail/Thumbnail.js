import React from 'react';
import "./Thumbnail.css"

 
function Thumbnail(props) {
  return (
    <>
       
            <div className="project">
                <a href={props.link} target="_blank">
                    <div className="project-image">
                    <img 
                        src={props.image} 
                        alt="Project" 
                        height="200px" 
                        width="200px"
                    />
                    </div>
                    <div className="project-title">
                        <h4>
                            {props.title}
                        </h4>
                    </div>
                    <div className="project-category">
                        <p>
                            {props.category}
                        </p>
                    </div>
                </a>
            </div>
        
    </>
  )
}
 
export default Thumbnail;