import messageList from '../../mock/messageList'
import MessageItem from '../messageItem'
import './index.css'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      {messageList.map((message) => (
        <MessageItem messageData={message} />
      ))}
    </div>
  )
}

export default Dashboard
