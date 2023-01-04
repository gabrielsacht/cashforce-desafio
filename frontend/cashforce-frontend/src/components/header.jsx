import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <aside>
        <div className='aside-main'>
          <div className='aside-main-header'>
            <img src="./images/cf/Logocash.png" alt="logocash" id='cashforce-logo'/>
          </div>
          <div className='aside-list'>
            <span id='selected'/>
            <img src="./images/cf/Vectorhands.svg" alt="handslogo" />
            <p>Notas fiscais</p>
          </div>
        </div>
        
      </aside>
    );
  }
}

export default Header;