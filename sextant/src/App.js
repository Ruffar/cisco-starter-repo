import './App.css';
import React from 'react';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import PublicAddress from './PublicAddress';



function App() {

  return (
    <div className="App">
      <Banner></Banner>
      
      <div className="ExhibitContainer">
        <Exhibit header="Public IP Address" landColor="rgb(80, 255, 120)">
          <PublicAddress useIpv6={false}></PublicAddress>
          <PublicAddress useIpv6={true}></PublicAddress>
        </Exhibit>
      </div>

      <div className="BottomBar">
        <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
      </div>
    </div>
  );
}

export default App;
