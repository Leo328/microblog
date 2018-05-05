import React, { Component } from "react";

class TitleList extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#title-1">
              {this.props.title1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="blog1" href="#">
            {this.props.title2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="blog2" href="#">
            {this.props.title3}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" name="blog3">
              Disabled
            </a>
          </li>
          </ul>
      </div>
    );
  }
}

export default TitleList;
