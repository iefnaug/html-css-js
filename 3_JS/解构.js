// let obj = {
//     name: 'scott',
//     age: 11
// }
// let {name, age} = obj;
// console.log(name, age);

let arr = [1,3,5,7]
let [a, b, ...rest] = arr
console.log(a, b, rest)

let user = {
    name: "John",
    years: 30,
    isAdmin: true
};

//结构，将years的值赋给变量age，isAdmin如果不存在就给默认值false
let {name, years: age, isAdmin = false} = user;
console.log(name, age, isAdmin)


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function highestSalary(salaries) {
    let max = -1;
    let people;
    for (let name in salaries) {
        if (salaries[name] > max) {
            max = salaries[name]
            people = name;
        }
    }
    return people;
}
console.log(highestSalary(salaries))