const employeeData = {
    name: "Hasib Al Din",
    designation : "Web Developer",
    address: "Puran Palatan Road , Dhaka - 1245",
    sallary : 40000,
}
const keys = Object.keys(employeeData);
console.log(keys);
for(let key of keys){
    console.log(key , ":", employeeData[key])
}