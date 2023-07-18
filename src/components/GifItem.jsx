import React from 'react'

export const GifItem = ({title, url}) => {

  return (
    <div className='card'>
        <img src={url.url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
