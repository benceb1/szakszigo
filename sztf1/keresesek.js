export function LogKeres(x, n, ertek) {
    let bal = 0;
    let jobb = n - 1;
    let center = Math.floor((bal + jobb) / 2);
    console.log("elso center: ", center)
    while((bal <= jobb) && x[center] != ertek) {
        if (x[center] > ertek) {
            jobb = center - 1;
        } else {
            bal = center + 1;
        }
        center = Math.floor((bal + jobb) / 2);
        console.log("masik center: ", center, " erteke: ", x[center])
    }
    let van = bal <= jobb;
    if (van) {
        return center;
    }
}