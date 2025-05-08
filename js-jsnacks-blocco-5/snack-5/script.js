const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const evenArr=[];

// const evenNumbers = nums.filter((curNumb) => evenArr.push(curNumb % 2 === 0))



nums.forEach((curNumb, i)=>{
    if(curNumb % 2 === 0){
        evenArr.push(curNumb)
    }
});

console.log(evenArr);