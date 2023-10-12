import './Index.css';
import { FaTwitter } from 'react-icons/fa';
import mainlogo from '../Images/logo-main.png';
import snap from '../Images/snap.png';
import arbinauts from '../Images/three-arbinauts.webp';
import wallet from '../Images/wallet-button.png';
import moon from '../Images/moon.webp';
const Index = () => {
  return (
    <div className='homePage'>
          <img src={moon} alt="moon" className='moon'/>

        <nav className='myNav'>
            <img src={mainlogo} alt="logo" className='logo'/>
            <div className='navRight'>
              <div><img src={wallet} alt="wallet button" className='wallet' /></div>
              <div className='snap'><img src={snap} alt="logo" /></div>
              <div className='twitter'><FaTwitter size={25}/></div>
            </div>
        </nav>
        <div className='midpage'>
          <p>Please connect your wallet to use the bridge.</p>
          <img src={arbinauts} alt="arbinauts" srcset="" />
        </div>
        <div className='footer'>
          <h4>The most decentralized L2</h4>
          <p className='learn'>Learn More.</p>
          <div className='footlinks'>
            <div>
              <p>Documentation</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
            <div>
              <p>Recent Press</p>
              <p>ToS</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index