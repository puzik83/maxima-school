const person = {
  name: "Igor",
  children: ['Maxim', 'Ira']
}
console.log(person.children);
const individ = person;
individ.children = ['Sveta', 'Masha'];
console.log(person.children);

