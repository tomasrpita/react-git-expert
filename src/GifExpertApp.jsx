import { useState } from 'react'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon Ball'])
    console.log(categories);
  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    {/* Listado de Gif */}
        {/* Gif Item */}
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
        
    </>
  )
}

export default GifExpertApp