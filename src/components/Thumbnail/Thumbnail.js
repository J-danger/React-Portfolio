import React from 'react';
import {Link} from 'react-router-dom';
import "./Thumbnail.css"

 
function Thumbnail(props) {
  return (
    <div className="animated fadeIn fast">
        <div className="wrapper">
            <div className="project">
                <a href={props.link}>
                    <div className="project-image">
                    <img 
                        src={props.image} 
                        alt="Project Image" 
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
        </div>
    </div>
  )
}
 
export default Thumbnail;