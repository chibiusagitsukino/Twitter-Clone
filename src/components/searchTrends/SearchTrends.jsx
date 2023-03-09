import './index.css'
import { useState } from 'react'

const SearchTrends = ({ setTrendInputValue }) => {
  const [inputValue, setInputValue] = useState('')

  const interceptInputValue = (e) => {
    setInputValue(e.target.value)
    setTrendInputValue(e.target.value)
  }

  return (
    <div className='SearchTrends'>
      <img
        src='https://img.icons8.com/external-creatype-outline-colourcreatype/256/external-user-interface-a1-creatype-outline-colourcreatype.png'
        alt='user'
      />
      <input
        type='text'
        placeholder='Search Twitter'
        value={inputValue}
        onChange={interceptInputValue}
        required
      />
      <img
        src='https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/256/external-gear-startups-tanah-basah-basic-outline-tanah-basah.png'
        alt='settings'
      />
    </div>
  )
}

export default SearchTrends
