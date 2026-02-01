const employeeData = {
    name: "Hasib Al Din",
    designation : "Web Developer",
    address: "Puran Palatan Road , Dhaka - 1245",
    sallary : 40000,
}
employeeData["work"] = "develop site";

for (let data in employeeData){
    console.log("_________");
    console.log(data);
    
    
    console.log(employeeData[data]);

}