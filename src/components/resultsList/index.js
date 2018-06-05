import React from 'react';
import ReactDOM from 'react-dom';
import ResultsDetail from '../resultsDetail';
import data from '../../data/sauce.json';

export default class ResultsList extends React.Component {
    render() {
      return (
        <div className="results">
         RESULTS
            <ResultsDetail />
        </div>
      );
    }
  }