import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon Ball'])
    // console.log(categories);

    const onAddCategory = (newCategory) => {

      if (categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories])
    }

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory={newCategory => onAddCategory(newCategory)} /> 
      {categories.map(category => 
          <GifGrid key={category} category={category}/>
      )}
    </>
  )
}

export default GifExpertApp