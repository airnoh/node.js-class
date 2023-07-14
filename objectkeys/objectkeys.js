const User = {
    person1:{
        name: 'Richard',
        age: 21
    },
    person2:{
        name: 'Airnoh',
        age: 11
    },
    person3:{
        name: 'Ubong',
        age: 14
    },
    person4:{
        name: 'Micheal',
        age: 15
    },
    person5:{
        name: 'Saviour',
        age: 10
    },
    person6:{
        name: 'Isaiah',
        age: 9
    },
}

// console.log(User)
// const objkey = Object.keys(User).filter(key =>{
//     return User[key].name == 'Richard' || User[key].name == 'Airnoh';
// })
const objProfile = Object.values(User).filter(value =>{
    return value.name == 'Richard' ||  value.name == 'Airnoh';
});
console.log(objProfile);

// const objkey = Object.keys(User).filter(key =>{
//     return (User[key].name).length > 5;
// })
// console.log(objkey)