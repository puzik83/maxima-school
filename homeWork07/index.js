class Person {
    constructor(fullName,age){
        this.fullName = fullName;
        this.age = age;
    };

        move() {
            console.log(`Такой-то ${this.fullName} двигается`);
        };

        talk() {
            console.log(`Такой-то ${this.fullName} говорит`);
        };
};

const person = new Person();
const person2 = new Person("John", 28);


const scholarship = function(averageGrade){
    if (averageGrade == 5){
        return '100 USD'
    } else{
        return '80 USD'
    }
};

class Student extends Person {
    constructor (fullName, age, firstName, lastName, group, averageGrade){
        super (fullName, age);
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageGrade = averageGrade;
    }
    getScholarship(){
      return scholarship(this.averageGrade);
    }
};

const scholarship2 = function(averageGrade){
    if (averageGrade == 5){
        return '200 USD'
    } else{
        return '180 USD'
    }
};

class Aspirant extends Student {
    constructor (fullName, age, firstName, lastName, group, averageGrade){
        super (fullName, age, firstName, lastName, group, averageGrade);
    }
    isPublications = true;

    getScholarship(){
        return scholarship2(this.averageGrade);
    }

};

const student1 = new Student('Maria G', 26, 'Maria', 'G', 1, 5);
const student2 = new Student('John D', 25, 'John', 'D', 1, 4);
const aspirant1 = new Aspirant('Roy F', 30, 'Roy', 'F', 2, 5);
const aspirant2 = new Aspirant('Bill N', 29, 'Bill', 'N', 2, 4);

let arr = [student1, student2, aspirant1, aspirant2];

arr.forEach(item => console.log(item.getScholarship()));










