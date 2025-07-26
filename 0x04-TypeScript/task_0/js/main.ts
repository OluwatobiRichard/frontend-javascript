interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

// crate two student
const student1: Student = {
   firstName: 'Alice',
   lastName: 'Richard',
   age: 20,
   location: 'Ghana'
};

const student2: Student = {
    firstName: 'Foluso',
    lastName: 'Esther',
    age: 25,
    location: 'Nigeria'
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Create table and populate it
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Add header row
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

// Add student rows
studentsList.forEach((Student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = Student.firstName;
  locationCell.textContent = Student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
