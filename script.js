const person={
    name:"suriya",
    age:22,
    city:"madurai",
    education:"b.sc.computer science",
}
console.log(person)

const personr={
    name:"suriya",
    age:22,
    city:"madurai",
    education:"b.sc.computer science",
}
console.log(personr.name)

const persons={
    name:"suriya",
    age:22,
    city:"madurai",
    education:"b.sc.computer science",
}
delete persons.name;
console.log(persons.name)

const car ={
    brand:"toyoto",
    start:function(){
        console.log("the car is started")
    }
}
console.log(car.start());

const student={
    mark:50,
    name:"suriya",
    sec:"b",
    class:3,
}
for(let key in student){
    console.log(key,student[key])
}







