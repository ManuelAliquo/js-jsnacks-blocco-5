const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi

people.forEach((person) => console.log(person.name));

//##########
console.log("---------");
//##########

const peopleNames = people.map((person) => person.name);

console.log(peopleNames);

// Risultato: 'Paolo', 'Giulia', 'Marco'
