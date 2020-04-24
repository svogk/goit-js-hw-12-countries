import countryTpl from '../templates/country.hbs';
import singleCountryTpl from '../templates/country-detail.hbs';
import { error } from './notifications';
import refs from './refs';

function updateCountriesMarkup(data) {
    if (data.length > 10) {
        error({
            text: 'Too many matches found. Please enter amore specific query! ',
        });
    } else if (data.length <= 10 && data.length >= 2) {
        const markup = countryTpl(data);
        refs.containerCountry.insertAdjacentHTML('beforeend', markup);
    } else if (data.length > 0) {
        const markup = singleCountryTpl(data);
        refs.containerCountry.insertAdjacentHTML('beforeend', markup);
    }
}

export default updateCountriesMarkup;