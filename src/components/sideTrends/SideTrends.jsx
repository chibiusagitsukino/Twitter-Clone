import { useState } from 'react'
import SearchTrends from '../searchTrends'
import TrendList from '../trendList'
import './index.css'

const SideTrends = () => {
  const [trendInputValue, setTrendInputValue] = useState('')

  return (
    <div className='SideTrends'>
      <SearchTrends setTrendInputValue={setTrendInputValue} />
      <h2>Trends for you</h2>
      <TrendList />
    </div>
  )
}

export default SideTrends
