import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = (event) => {
    setinputValue(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()

    if (inputValue.trim() <= 1) return;

    onNewCategory(inputValue.trim())
    setinputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      type="text"
      placeholder="Escribe el tema del gif que quieres encontrar..."
      value={inputValue}
      // onChange={(event) => { onInputChange(event)}}
      // Como esta recibiendo el mismo valor:
      onChange={onInputChange}
      />
    </form>
    )
}
