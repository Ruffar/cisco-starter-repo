import './Exhibit.css';
import React, {Component} from 'react';



class Exhibit extends Component
{
  constructor(props)
  {
    super(props);
    if (this.props.landColor == null) {
        this.props.landColor = "rgb(80, 255, 120)";
    }
  }

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