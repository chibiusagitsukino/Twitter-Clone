import { useState, useEffect } from 'react'
// import messageList from '../../mock/messageList'
import MessageItem from '../messageItem'
import './index.css'

const Dashboard = () => {
  const [messageList, setMessageList] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then(({ posts }) => setMessageList(posts))
  }, [])

  return (
    <div className='Dashboard'>
      {messageList.map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
    </div>
  )
}

export default Dashboard
