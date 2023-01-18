import icon from './icon.svg';
import React from 'react';
import './App.css';



class PageButton extends React.Component
{
  render()
  {
    return (
      <button key={this.props.text+"PageButton"} className="PageButton">{this.props.text}</button>
    );
  }
}

class Banner extends React.Component
{
  render()
  {
    return (
      <div className = "Banner">
        <div className="BannerLogo">
          <img src={icon} className="AppIcon" alt="icon"/>
          Sextant
        </div>
        <PageButton text="Home" link="/"></PageButton>
        <PageButton text="About" link="/about"></PageButton>
      </div>
    );
  }
}

class Exhibit extends React.Component
{
  render()
  {
    return (
      <div className="Exhibit">
        <h className="ExhibitHeader">{this.props.header}</h>
        {this.props.children}
      </div>
    );
  }
}



function App() {

  return (
    <div className="App">
      <Banner></Banner>
      <div className="BottomBar">
        <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
      </div>
      <div className="ExhibitContainer">
        <Exhibit header="Public IP"></Exhibit>
      </div>
    </div>
  );
}

export default App;
