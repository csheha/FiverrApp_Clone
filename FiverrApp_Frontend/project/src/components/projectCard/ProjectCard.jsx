import React from 'react'
import "./ProjectCard.scss"
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  return (
    <Link to="/" className='link'>
    <div className='projectCard'>

      <img src={item.image} alt=""/>
      <div className="info">
        <img src={item.profilepic} alt=""/>
      </div>
      <div className="texts">
        <h2>{item.category}</h2>
        <span>{item.UserActivation}</span>
      </div>
      
    </div>
    </Link>
  )
}

export default ProjectCard;
