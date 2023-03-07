import TrendItem from '../trendItem'
import './index.css'

const TrendList = () => {
  const arrayTrends = [
    {
      title: 'Di tendenza nella seguente zona: Italia',
      subTitle: '#redditodicittadinanza',
      text: '1.403 Tweet',
    },
    {
      title: 'Di tendenza nella seguente zona: Italia',
      subTitle: 'Il Papa',
      text: '3.041 Tweet',
    },
    {
      title: 'Di tendenza nella seguente zona: Italia',
      subTitle: 'Tachipirina',
      text: '1.619 Tweet',
    },
  ]

  return (
    <div>
      {arrayTrends.map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  )
}

export default TrendList
