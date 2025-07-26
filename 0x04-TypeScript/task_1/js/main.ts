export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Extra property using index signature
};

console.log(teacher3);

export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));


// Interface for the class structure
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('Alice', 'Johnson');

console.log(student.displayName());    // Output: Alice
