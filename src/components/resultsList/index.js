import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { selectedSauces: state.selectedSauces };
};
 
const ConnectedResultsList = ({ selectedSauces }) => (
    <div className="resultsList">
        <div className="selectedSauce">
            {selectedSauces.map(el => (
                <div key={el.id}>
                    <h2>{el.name}</h2>
                    <p>You chose the <em>{el.name}</em> which is made by <strong>{el.maker} </strong>and has a heat level of <strong>{el.heat}</strong></p>      
                </div>
            ))}
        </div>
    </div>
)
const ResultsList = connect(mapStateToProps)(ConnectedResultsList);

export default ResultsList;