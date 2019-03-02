import { GET_COUNTRIES, GET_COUNTRY } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {}
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: state.countries}
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
            return {...state, selectedCountry};
    }
    return state;
}

export default countriesReducer;