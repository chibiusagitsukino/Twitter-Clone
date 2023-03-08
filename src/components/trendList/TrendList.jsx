import trendList from '../../mock/trendList'
import TrendItem from '../trendItem'
import './index.css'

const TrendList = () => {
  return (
    <div>
      {trendList.map((item) => (
        <TrendItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default TrendList
