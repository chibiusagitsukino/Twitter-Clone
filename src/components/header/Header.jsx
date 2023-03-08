import './index.css'
import HamburgerMenu from '../hamburgerMenu'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu) /* funziona come un toggle */
  }

  return (
    <div className='Header'>
      <div className='Header__up'>
        <nav>
          <ul className='Header__up__ul'>
            <li>
              <img
                src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png'
                alt='hamburger'
                className='Header__hamburger'
                onClick={hamburgerTrigger}
              />
            </li>
            <HamburgerMenu showMenu={showMenu} />
            <li>
              <img
                src='https://img.icons8.com/color/256/twitter--v1.png'
                alt='logo'
              />
            </li>
            <li>
              <img
                className='sparkles'
                src='https://img.icons8.com/ios/256/sparkling.png'
                alt='sparkles'
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className='Header__down'>
        <img
          src='https://img.icons8.com/ultraviolet/256/user.png'
          alt='profilo'
        />
        <input type='text' placeholder="What's happening?" />
        <img src='https://img.icons8.com/fluency/256/image.png' alt='image' />
        <img src='https://img.icons8.com/arcade/256/gif.png' alt='gif' />
        <img
          src='https://img.icons8.com/fluency/256/combo-chart.png'
          alt='graph'
        />
      </div>
    </div>
  )
}

export default Header
