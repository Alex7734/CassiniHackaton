import styler from './NotificationsScreen.module.css';
import { Switch } from '@mui/material';


function NotificationsScreen() {
  
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
        <p className={styler.Text}>Notifications</p>
        <div className={styler.ContainerSwitch}>
          <p className={styler.Text2}>Notifications</p>
          <div className={styler.Switch}>
            <Switch />
          </div>
        </div>
        <div className={styler.ContainerSwitch2}>
          <p className={styler.Text3}>Social notifications</p>
          <div className={styler.Switch2}>
            <Switch />
          </div>
        </div>
        <div className={styler.ContainerSwitch3}>
          <p className={styler.Text4}>Power notifications</p>
          <div className={styler.Switch3}>
            <Switch />
          </div>
        </div>
        <div className={styler.ContainerSwitch4}>
          <p className={styler.Text5}>Roadblock notifications</p>
          <div className={styler.Switch4}>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationsScreen;
