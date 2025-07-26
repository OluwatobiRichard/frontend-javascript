import { Teacher } from './teacher';

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Extra property using index signature
};

console.log(teacher3);
