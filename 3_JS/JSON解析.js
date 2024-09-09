// let user = {
//     name: "John",
//     age: 30,
//     toString() {
//         return `name is ${this.name} and age is ${this.age}`;
//     }
// }
// console.log(user.toString());
// console.log(JSON.stringify(user));
//
// let obj = JSON.parse(JSON.stringify(user));
// console.log(obj)

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
// };
// console.log(JSON.stringify(student, null, 2));





// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup 引用了 room
// };
//
// room.occupiedBy = meetup; // room 引用了 meetup
// // let ret = JSON.stringify(meetup, ['title', 'participants', 'name'], 2);
// // console.log(ret);
// let keys = [];
// let ret = JSON.stringify(meetup, function(key, value) {
//     keys.push(key);
//     //跳过值为undefined的key
//     return key === 'occupiedBy' ? undefined : value;
// }, 2);
// console.log(ret)
// console.log(keys)



/*
自定义toJSON
 */
// let obj = {
//     name: "scott",
//     age: 11,
//     toJSON() {
//         return this.name;
//     }
// }
// console.log(JSON.stringify(obj, null, 2))




let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, (k, v) => {
    if (k === 'date') {
        return new Date(v);
    }
    return v;
});
console.log(meetup);

