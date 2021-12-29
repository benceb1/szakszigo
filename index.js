import {egyszeruCseres, minimalkivalasztasosRendezes, buborek, javitottBuborek, beilleszteses, javitottBeilleszteses} from "./sztf1/rendezesek.js"

let x = [4,3,8,6,1];

function main(){
    javitottBeilleszteses(x, x.length);
    console.log(x)
}
main();