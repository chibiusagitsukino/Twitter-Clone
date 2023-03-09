// Esercizio 09-03-2023 - useRef
/* La mia intenzione era quella di utilizzare l'hook useRef 
  per ottenere il riferimento all'elemento input 
  e impostare il focus su di esso quando la pagina viene caricata.*/

import './index.css'
import HamburgerMenu from '../hamburgerMenu'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

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
        <input type='text' placeholder="What's happening?" ref={inputRef} />
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
