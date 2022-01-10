// ######################################
// Ismetlodo esetek kezelese
export function unio(x1, n1, x2, n2) {
    let y = new Array(n1 + n2);
    for (let i = 0; i < n1; i++) {
        y[i] = x1[i];
    }
    let db = n1;
    for (let j = 0; j < n2; j++) {
        let i = 0;
        while ((i < n1) && (x1[i] != x2[j])) {
            i++;
        }
        if (i >= n1) {
            y[db] = x2[j];
            db++;
        }
    }
    return y;
}
// ha külön külön vannak ismétlődő elemek a 2 tömbben, és nem ugyanaz, mint a másikban akkor a kimeneti tömbben benne lesznek
// ha az elsőben van ismétlődő elem, és a a másikban 1x fordul elő, a kimeneti tömbben akkor is lesz ismétlődő elem

// ######################################
// Grafok csucsmatrix alapu inmplementacioja

// hogy két csúcs között vezet-e és, egy lépésben megadható
// szomszedos csucsok kigyujtese o(n)

// ######################################
function asd () {

}