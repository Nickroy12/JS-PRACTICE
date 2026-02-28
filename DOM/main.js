const main = document.getElementById('demo');

function toggle(){
    main.classList.remove('marker')
main.classList.add('highlight')
main.innerHTML = "Hello"
}
console.log(main)