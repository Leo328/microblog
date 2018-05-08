import React, { Component } from "react";

class TitleList extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column">
          {this.props.titles.map(title => (
            <li className="nav-item">
              <a className="nav-link active" href="#title-1">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TitleList;
