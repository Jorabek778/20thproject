import React, { useState } from 'react'

const Reviews = (props) => {
    const [state , setState] = useState(0)
    const {id, name, job, image, text} =props.info[state]

    const NextData = ()=>{
        if(state === props.info.length - 1){
            setState(0)
        }
        else{
            setState(state+1)
        }
    }

    const PrevData = ()=>{
        if(state === 0){
            setState(props.info.length - 1)
        }
        else{
            setState(state-1)
        }
    }

    const RandomData = ()=>{
        setState(Math.round(Math.random()*3))
    }

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt='per'/>
        <span className='quote-icon'><i className='fa-solid fa-quote-right'></i></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={PrevData} className='prev-btn'><i className="fa-solid fa-chevron-left"></i></button>
        <button onClick={NextData} className='next-btn'><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <button onClick={RandomData} className='random-btn'>Surprise Me</button>
    </article>
  )
}

export default Reviews