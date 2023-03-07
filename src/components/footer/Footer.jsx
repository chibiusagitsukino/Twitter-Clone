import './index.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <footer>
        <ul>
          <li>
            <img
              src='https://img.icons8.com/material-outlined/256/home--v2.png'
              alt='home'
            />
          </li>
          <li>
            <img
              src='https://img.icons8.com/ios-glyphs/256/search--v1.png'
              alt='search'
            />
          </li>
          <li>
            <img
              src='https://img.icons8.com/fluency-systems-regular/256/appointment-reminders--v1.png'
              alt='notifications'
            />
          </li>
          <li>
            <img
              src='https://img.icons8.com/material-outlined/256/mail.png'
              alt='messages'
            />
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
