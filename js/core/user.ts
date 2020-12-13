import { Location } from './classes/location';

class User {
  firstName;
  lastName;
  email;
  phone;
  dealerId;
  location: Location;

  constructor() {
    this.firstName = 'Salvador';
    this.lastName = 'Sanchez';
    this.email = 'salvador.sanchez@polaris.com';
    this.phone = '8120782935';
    this.dealerId = '29374673';
    this.location = new Location();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


const user = new User();
export { user } ;
