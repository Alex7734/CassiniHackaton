import Collapsible from '@/components/Collapsible/CollapsibleMenu';
import styler from './AreasScreen.module.css';

function AreasScreen() {
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
        <p className={styler.Text}>Areas</p>
        <div className={styler.Collapsible}>
          <Collapsible content='Home'>
            <ul>
              <li>Area 1</li>
              <li>Area 2</li>
            </ul>
          </Collapsible>
        </div>
        <div className={styler.Collapsible2}>
          <Collapsible content='Work'>
            <ul>
              <li>Area 3</li>
              <li>Area 4</li>
            </ul>
          </Collapsible>
        </div>
        
      </div>
    </>
  );
}

export default AreasScreen;
