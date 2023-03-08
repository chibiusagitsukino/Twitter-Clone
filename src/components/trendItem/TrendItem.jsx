import './index.css'

const TrendItem = ({ data }) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <h3>{data.subTitle}</h3>
      <h5>{data.text}</h5>
    </div>
  )
}

export default TrendItem
