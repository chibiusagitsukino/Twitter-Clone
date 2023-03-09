import { useState } from 'react'
import trendList from '../../mock/trendList'
import TrendItem from '../trendItem'
import './index.css'

const TrendList = () => {
  const [trendInputValue, setTrendInputValue] = useState('')

  return (
    <div className='TrendList'>
      {trendList.map((item) => (
        <TrendItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default TrendList
