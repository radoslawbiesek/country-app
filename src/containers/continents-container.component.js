import React, { Component } from 'react';
import CountryFlagList from '../presentational/flag-list.component';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import { connect } from 'react-redux';


class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value))
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europe'));
    }

    render() {
        return (
            <div>
                <select onChange={this.chooseContinent.bind(this)}>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(ContinentsContainer);