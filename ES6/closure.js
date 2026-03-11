function outerFunction(){
    function innerFunction(){
        console.log('Hi Iam nick')
    }
    return innerFunction;
}
const result = outerFunction();
result()

function counter(owner){
    let count = 0;
    function increment(){
      count+= 1;
      console.log('value of', owner,  count)
    }
    return increment;
}
const count = counter("Adbik");
count()
count()
count()