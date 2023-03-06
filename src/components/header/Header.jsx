import './index.css'
import SideMenu from '../SideMenu'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__up'>
        <nav>
          <ul>
            <li>
              <img
                src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png'
                alt='hamburger'
              />
            </li>
            {/* <SideMenu /> */}
            <li>
              <img
                src='https://img.icons8.com/color/256/twitter--v1.png'
                alt='logo'
              />
            </li>
            <li>
              <img
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
