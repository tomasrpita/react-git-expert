import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon Ball'])
    // console.log(categories);

    const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories])
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory onNewCategory={newCategory => onAddCategory(newCategory)} /> 
    {/* Listado de Gif */}
        {/* Gif Item */}
        <ol>
          {categories.map((category, i) => {
              return <li key={category}>{category}</li>
          })}
        </ol>
        
    </>
  )
}

export default GifExpertApp