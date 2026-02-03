const humen =["Atik" ,"Murshid", "Shafiq" ,"Atik" , 'Kalam' , "Murshid"];


function noDup(array){
   const sort = []; 
    for(let item of array){
        if(sort.includes(item)=== false){
            sort.push(item)
        }
    }
    return sort;
}
console.log(noDup(humen))