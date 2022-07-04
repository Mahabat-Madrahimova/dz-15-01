class Human {
    constructor(name, age, gender, position) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.position = position;

    }
}

class Teacher extends Human{
    constructor(name, age, position, direction, experience, gender) {
        super(name, age, gender, position);
        this.experience = experience;
        this.direction = direction;
    }
}
const marina = new Teacher(
    'marina',
    45,
    'teacher',
    'UI-UX',
    13,
    'female'
)
console.log(marina)

class Student extends Human{
    constructor(name, age, position, direction, rating, month, gender) {
        super(name, age, gender, position);
        this.direction = direction;
        this.month = month;
        this.rating = rating;
    }
}

const mahabat = new Student(
    'Mahabat',
    17,
    'student',
    'frontend',
    10,
    2,
    'famale'
)
console.log(mahabat);



class Family{
    constructor(familyName, amount) {
        this.familyName = familyName;
        this.amount = amount;
    }
}

const metalFamily = new Family(
      'Metal-Family',
      4
)

class FamilyMember extends Human{
    constructor(name, age, position, familyName){
      super(name, age, position, familyName);
      this.familyName = familyName;
    }
    getInf(){
      console.log(`Name: ${this.name};\nAge: ${this.age};\nfamilyName: ${this.familyName}.`)
    }
}

const d = new FamilyMember(
      'D',
      15,
      'старший сын',
      'Metal-Family'
)

d.getInf();