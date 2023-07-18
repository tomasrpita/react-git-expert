import { useState, useEffect} from 'react'
import { getGifts } from "../helpers/getGifts";
import { GifItem } from './GifItem';

export const GifGrid = ({category})  =>  {

    const [images, setImages] = useState([])

    const getImages = async() => {
      const newImages = await getGifts(category)
      setImages(newImages)
    }
    
    useEffect(()=> {
      getImages()
    }, [])

    return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem 
              key={image.id}
              { ...image }
              />
            ))
          }
        </div>
    </>

  )
}

