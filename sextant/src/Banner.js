import icon from './icon.svg';
import './Banner.css';
import React, {Component} from 'react';

class PageButton extends Component
{
  render()
  {
    return (
      <button key={this.props.text+"PageButton"} className="PageButton">{this.props.text}</button>
    );
  }
}

class Banner extends Component
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
      </div>
    );
  }
}

export default Banner;
