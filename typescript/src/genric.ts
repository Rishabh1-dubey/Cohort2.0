function toGenric<T>(arr:T[]){
    return arr[0];
}

let el  =  toGenric<string>(["Rishabh",  "dubey"]);
let firstletter =  el.charAt(0)
el.toLowerCase();
console.log(firstletter);