"use strict";
function sumOfTwoNum(user1, user2) {
    return user1.age + user2.name;
}
const age = sumOfTwoNum({ name: "tony", age: 44 }, { name: "Rishabh", age: 45 });
console.log(age);
