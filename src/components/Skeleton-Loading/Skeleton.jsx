import React from 'react'
import './Skeleton.css'

const Skeleton = ({ classes }) => {
  const className = ` Skeleton ${ classes } animate-pulse`
  return(
    <div className={className}></div>
  )
}

export default Skeleton