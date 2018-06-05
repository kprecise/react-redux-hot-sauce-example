import React from 'react';
import ReactDOM from 'react-dom';
import dataType from '../../data/type.json';

export default class Search extends React.Component {
    render() {
      return (
        <div className="search" saucestate={this.props.sauceState}>
          {/* <input type="text" name="search" value={this.props.state}/> */}
          <select onChange={event => this.setState({text: event.target.value})}>
          {/* this.props.handleChange */}
          {
          dataType.map(function(saucetype, i){
              return <option key={i} id={saucetype.id}>{saucetype.category}</option>;
            })
          }
          </select>
          <button name="submit" value="submit" id="searchResults" className="btn btn-primary" onClick={this.props.handleClick}>Make your selection</button>
        </div>
      );
    }
  }

