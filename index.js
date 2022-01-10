import {egyszeruCseres, minimalkivalasztasosRendezes, buborek, javitottBuborek, beilleszteses, javitottBeilleszteses} from "./sztf1/rendezesek.js"

import {fibonacci} from "./sztf1/rekurzio.js";
import {gyorsrendezes, osszefesuloRendezes, sorozatszamitas} from "./sztf1/oszdmegesuralkodj.js";
import {unio} from "./szakszigokerdesek.js"
import {LogKeres} from "./sztf1/keresesek.js";
import {maximum_kivalogatas} from "./sztf1/osszetett_tetelek.js";

let x = [4,4,3,8,6,1];
let x2 = [2,3,4,10,10,5]
let halmaz = [1,2,3,5,7,8,9,12,13,15,16,17,19,20];
           // 1 2 3 4 5 6 7 8  9  10 11 12 13 14
/*
1 -7
2- 11 (8+14)/2-t kapja, azaz 11-et
3- 13 (12 + 14)/2 -> 13
4 - 12 (12 + 12) / 2

*/

let halmaz2 = [2,7,4,7,7,3,7,8,1,6,7,8,8,3,7,9,8]

function main(){
   console.log(maximum_kivalogatas(halmaz2, halmaz2.length))
}
main()














