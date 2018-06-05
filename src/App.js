import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Search from './components/search';
import ResultsList from './components/resultsList';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { sauceSelected } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    this.props.sauceSelected('test');
  }
  
  handleChange(e) {
    this.setState({ selectedType: e.target.value });
  }
  
  render() {
    return (
      <div className="hotsauce-container">
          <Header />
          <h1>{this.props.selectedType}</h1>
          <div className="main-content">
              <Search saucestate={this.state.sauces} handleClick={this.handleClick} handleChange={this.handleChange}/>
              <ResultsList />  
          </div>
          <Footer />
      </div>
    );
  }
}


/**
 * 
 * This will make your component aware of properties in the store 
 */
const mapStateToProps = state => {
  return {
    sauces : state.sauces,
    selectedType: state.selectedType,
  }
}

/**
 * 
 * This will make your component aware of actions 
 */
const mapDispatchToProps = dispatch => {
  return {
    sauceSelected: (item) => {
      dispatch(sauceSelected(item));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
