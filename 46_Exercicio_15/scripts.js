
let numPrim = 45;
let divisao = 0;

for (let i=1; i <= numPrim; i++) { 

    if (numPrim % i == 0) {
        divisao++;
    }
  

}

if (divisao == 2) {
    console.log(`O número ${numPrim} é primo`);
} else {
    console.log(`O número ${numPrim} não é primo`);
}


console.log("\n");

for(let i = 1; i <= 50; i++) {
    
    let isPrime = true;
    
    if(i == 1) {
        
        isPrime = false;
    
    } else {
        
        for (let j = 2; j < i; j++) {
            
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
    }   
        
    if (isPrime) {

        console.log(`${i} é primo`);
        
    } else {
        
        console.log(`${i} não é primo`);
    }

}


