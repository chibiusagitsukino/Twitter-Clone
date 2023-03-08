import { useState, useEffect } from 'react'
import './index.css'

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData

  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
  }, [])

  return (
    <div className='MessageItem'>
      <img
        className='MessageItem__photo'
        src={userData.image}
        alt={userData.username}
      />
      {/* <div className='MessageItem__photo'>{userId}</div> */}
      <div className='MessageItem__content'>
        <span>{userData.username}</span>
        <span> {userData.email}</span>
        <p>{body}</p>
        <div className='MessageItem__content--icons'>
          <img
            src='https://img.icons8.com/small/256/twitter-reply.png'
            alt='reply'
          />
          <img
            src='https://img.icons8.com/material-outlined/256/retweet.png'
            alt='retwit'
          />
          <img
            src='https://img.icons8.com/ios-glyphs/256/hearts.png'
            alt='heart'
          />
          <img
            src='https://img.icons8.com/fluency-systems-regular/256/share.png'
            alt='share'
          />
        </div>
      </div>
    </div>
  )
}
export default MessageItem
