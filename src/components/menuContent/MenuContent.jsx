import './index.css'

const MenuContent = () => {
  return (
    <ul className='hamburger-ul'>
      <li>
        <img
          src='https://img.icons8.com/external-creatype-outline-colourcreatype/256/external-user-interface-a1-creatype-outline-colourcreatype.png'
          alt='user'
        />
      </li>
      <li>
        <img src='https://img.icons8.com/small/256/user.png' alt='Profilo' />
        <p>Profile</p>
      </li>
      <li>
        <img
          src='https://img.icons8.com/small/256/topic--v1.png'
          alt='Argomenti'
        />
        <p>Topics</p>
      </li>
      <li>
        <img
          src='https://img.icons8.com/small/256/bookmark.png'
          alt='Bookmarks'
        />
        <p>Bookmarks</p>
      </li>
      <li>
        <img
          src='https://img.icons8.com/small/256/ingredients-list.png'
          alt='Lists'
        />
        <p>Lists</p>
      </li>
      <li>
        <img
          src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-friends-online-marketing-flaticons-lineal-color-flat-icons.png'
          alt='Twitter Circle'
        />
        <p>Twitter Circle</p>
      </li>
    </ul>
  )
}

export default MenuContent
