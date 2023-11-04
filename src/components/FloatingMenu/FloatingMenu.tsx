import React from 'react';
import style from './FloatingMenu.module.css';

const BurgerMenu: React.FC = () => {
  return (
    <div className={style.burgerMenu}>
      <ul>
        <li>
            <a href="http://localhost:5174/">
              <div className={style.Bg1}>
                <img src="images/white_logo.svg" alt="logo" className={style.Logo2} /> 
              </div>
            </a>
        </li>
        <li><a href="http://localhost:5174/page-1">
              <div className={style.Bg2}>
                <img src="images/party-horn-svgrepo-com.svg" alt="logo" className={style.Logo1} /> 
              </div>
            </a></li>
        <li><a href="#">
              <div className={style.Bg3}>
                <img src="images/power-svgrepo-com.svg" alt="logo" className={style.Logo1} /> 
              </div>
            </a></li>
        <li><a href="#">
              <div className={style.Bg4}>
                <img src="images/construction-machine-crane-svgrepo-com.svg" alt="logo" className={style.Logo1} /> 
              </div>
            </a></li>
        <li><a href="#">
              <div className={style.Bg5}>
                <img src="images/house-svgrepo-com.svg" alt="logo" className={style.Logo1} /> 
              </div>
            </a></li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
