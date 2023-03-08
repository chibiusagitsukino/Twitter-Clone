import SearchTrends from '../searchTrends'
import TrendList from '../trendList'
import './index.css'

const SideTrends = () => {
  return (
    <div className='SideTrends'>
      <SearchTrends />
      <h2>Trends for you</h2>
      <TrendList />
    </div>
  )
}

export default SideTrends
