import { user } from '../../core/user';

const _selectors = {
  formElement: '#form',
  postalCodeElement: '#postalCode'
};

const _cache = {
  formElement: document.querySelector(_selectors.formElement) as HTMLFormElement,
  postalCodeElement: document.querySelector(_selectors.postalCodeElement) as HTMLInputElement
};

window.addEventListener('load', () => {
  _cache.formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = _cache.formElement.checkValidity();
    if (isFormValid) {
      let postalCode = _cache.postalCodeElement.value;
      if (postalCode) {
        user.location.postalCode = postalCode;

        console.info(`Saved postal code: ${postalCode}`);
      }
    }
  });
});
