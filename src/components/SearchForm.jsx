import React from 'react'
import { Form } from 'react-router-dom'

const SearchForm = () => {
  return (
    <Form>
        <input type='search' name='search' id='search' defaultValue="margarita">
        </input>
        <button  type='submit' className='btn'>Search</button>
    </Form>
    
  )
}

export default SearchForm