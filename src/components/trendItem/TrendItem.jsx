import './index.css'

const TrendItem = ({ data }) => {
  return (
    <div>
      <h5>{data.subTitle}</h5>
      <h3>{data.title}</h3>
      <h7>{data.text}</h7>
    </div>
  )
}

export default TrendItem
