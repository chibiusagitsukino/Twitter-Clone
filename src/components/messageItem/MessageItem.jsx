import './index.css'

const MessageItem = ({ messageData }) => {
  const { photo, userName, body, email } = messageData

  return (
    <div className='MessageItem'>
      <img className='MessageItem__photo' src={photo} alt={userName} />
      <div className='MessageItem__content'>
        <span>{userName}</span>
        <span> {email}</span>
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
