import {egyszeruCseres, minimalkivalasztasosRendezes, buborek, javitottBuborek, beilleszteses, javitottBeilleszteses} from "./sztf1/rendezesek.js"

import {fibonacci} from "./sztf1/rekurzio.js";
import {gyorsrendezes, osszefesuloRendezes} from "./sztf1/oszdmegesuralkodj.js";

let x = [4,3,8,6,1];

function main(){
    gyorsrendezes(x, 0,4);
    console.log(x)
}
main();