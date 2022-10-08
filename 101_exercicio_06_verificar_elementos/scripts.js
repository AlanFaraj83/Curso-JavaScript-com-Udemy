let arriva1 = [1,2,3,4,5,6];
let arriva2 = ["Alan","Hanin","Zein"];

function verificarArr(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificarArr(arriva1);
verificarArr(arriva2);

console.log(arriva1.length);
console.log(arriva2.length);
