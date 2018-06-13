import React, { Component } from "react";
import data from '../../data/sauce.json';
import uuidv1 from "uuid";
import { connect } from "react-redux";
import { selectSauce } from "../../actions/";  
import { clearSauces } from "../../actions/";  

const mapDispatchToProps = dispatch => {
    return {
        selectSauce: selectedSauce => dispatch(selectSauce(selectedSauce)),
        clearSauces : allSauceSelections => dispatch(clearSauces(allSauceSelections))
    };
};

class ConnectedResultsForm extends React.Component {
    constructor() {
        super();
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const name = event.target.options[event.target.selectedIndex].getAttribute('data-name');
        const maker = event.target.options[event.target.selectedIndex].getAttribute('data-maker');
        const heat = event.target.options[event.target.selectedIndex].getAttribute('data-heat') + '/5';
        const id = uuidv1();
        this.props.selectSauce({ id, name, maker, heat });
    }

    handleClick(event) {
        event.preventDefault();
        const sauceDetails = "Sauces cleared";
        this.props.clearSauces({ sauceDetails }); 
    }

    render() {
        return (       
        <div className="results">
            <h1>Choose Your Hot Sauce</h1>
            <form>
                <div className="form-group">
                    <select onChange={this.handleChange}>
                        {data.map(el => (
                        <option className="list-group-item" key={el.id} data-name={el.name} data-id={el.id} data-maker={el.maker} data-heat={el.heatlevel}>
                            {el.name}
                        </option>
                        ))} 
                    </select>
                    <button type="submit" onClick={this.handleClick}>CLEAR ALL</button>
                </div>
            </form>
        </div>
        );
    }
}

const ResultsForm = connect(null, mapDispatchToProps)(ConnectedResultsForm);

export default ResultsForm;