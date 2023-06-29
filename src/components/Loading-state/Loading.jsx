import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='Loading'>
        <div className="loading-container">
            <div className="loader"></div>
            <div className="loader loader1"></div>
            <div className="loader loader2"></div>
        </div>
    </div>
  )
}

export default Loading