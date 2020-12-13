import { user } from '../../core/user';
import './dealer-locator.scss';

let _selectors = {
  postalCodeButtonElement: '#showPostalCode'
};

let _cache = {
  postalCodeButtonElement: document.querySelector(_selectors.postalCodeButtonElement) as HTMLButtonElement
};

function onDocReady(e: Event) {
  _cache.postalCodeButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Saved postal code: ${user.location.postalCode}`);
  });
}

window.addEventListener('load', (e) => {
  onDocReady(e);
})
