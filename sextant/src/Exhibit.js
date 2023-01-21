import './Exhibit.css';
import React, {Component} from 'react';



class Exhibit extends Component
{
  render()
  {
    return (
      <div className="Exhibit">
        <h1 className="ExhibitHeader">{this.props.header}</h1>
        <div className="ExhibitMain">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Exhibit;