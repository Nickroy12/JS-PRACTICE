const student ={
    name: "Abu Bakkar",
    class: 9,
    roll: 239,
    books:["Bangla", "Social Economy", "Global Politics"],
    task: function(){
        console.log("READ , WRITE");
        
    },
    friends: {
        soulFriend: "Akram",
        bestFriend: "Akash"

    }
}
student.task()
const output = student.friends["bestFriend"]
console.log(output);
