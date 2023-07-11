import { useState } from 'react'


const AddCategory = () => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = (event) => {
    console.log(event.target.value);
    setinputValue(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    console.log('Enviando: ', inputValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue}
      // onChange={(event) => { onInputChange(event)}}
      // Como esta recibiendo el mismo valor:
      onChange={onInputChange}
      />
    </form>
    )
}

export default AddCategory