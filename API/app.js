
function loadData(){
    const api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
.then(res => res.json())
.then(data => display(data));

}
function display(users){
    const container = document.getElementById('box');
    container.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.style = 'list-style:none; border:1px solid red; margin:19px'
        li.innerHTML = `Name : ${user.name} </br> email:${user.email}`;
        container.appendChild(li);
    });
}