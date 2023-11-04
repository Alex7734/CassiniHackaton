import Collapsible from '@/components/Collapsible/CollapsibleMenu';
import styler from './AccountScreen.module.css';
import { FaChevronCircleRight } from 'react-icons/fa';

function AccountScreen() {
  return (
    <>
      <div className={styler.MainContainer}>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:700" />
        </head>
        <a href='/'>
          <div className={styler.Button}>X</div>
        </a>
        <img src='/images/blue_text.svg' alt='Areas' className={styler.Image} />
        <p className={styler.Text}>Account</p>
        <div className={styler.ContainerSwitch}>
          <p className={styler.Text3}>Update email</p>
          <p className={styler.Switch}>
            <FaChevronCircleRight style={{color: '#6177EF', marginTop: 18, marginLeft: 25, fontSize: 30}}/>
          </p>
        </div>
        <div className={styler.ContainerSwitch2}>
          <p className={styler.Text4}>Update personal information</p>
          <p className={styler.Switch2}>
            <FaChevronCircleRight style={{color: '#6177EF', marginTop: 16, marginLeft: 25, fontSize: 30}}/>
          </p>
        </div>
        <div className={styler.ContainerSwitch3}>
          <p className={styler.Text5}>Help</p>
          <p className={styler.Switch3}>
            <FaChevronCircleRight style={{color: '#6177EF', marginTop: 19, marginLeft: 25, fontSize: 30}}/>
          </p>
        </div>
        
      </div>
    </>
  );
}

export default AccountScreen;
