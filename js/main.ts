import { user } from '../js/core/user';


window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  console.log(`User: ${user.getFullName()}`);
});
