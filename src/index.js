import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';
import refs from './js/refs';

refs.searchCountry.addEventListener(
    'input',
    debounce(function (event) {
        event.preventDefault();

        const nameCountry = event.target.value;
        if (nameCountry.trim().length === 0) {
            return;
        }

        refs.containerCountry.innerHTML = '';

        fetchCountries(nameCountry).then(updateCountriesMarkup);
    }, 500),
);