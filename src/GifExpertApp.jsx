import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon Ball'])
    // console.log(categories);

    const onAddCategory = () => {
      console.log('Valorant')
      setCategories([...categories, 'valorant'])
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory /> 
    {/* Listado de Gif */}
        {/* Gif Item */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {categories.map(category => {
              return <li key={category}>{category}</li>
          })}
        </ol>
        
    </>
  )
}

export default GifExpertApp