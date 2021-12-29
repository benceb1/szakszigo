function csere(x, i, j) { // x: tomb, (i, j): indexek
    let temp = x[i];
    x[i] = x[j];
    x[j] = temp;
}

// O(n^2)
export function egyszeruCseres(x, n) { // x: tomb, n: egesz
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (x[i] > x[j]) {
                csere(x, i, j);
            }
        }
    }
}

// O(n^2)
export function minimalkivalasztasosRendezes(x, n) {
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (x[min] > x[j]) {
                min = j;
            }
        }
        csere(x, i, min);
    }
}

// O(n^2)
export function buborek(x, n) {
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (x[j] > x[j + 1]) {
                csere(x, j, j+1);
            }
        }
    }
}

// JAVITOTT BUBOREK
// kulso ciklus szamlal visszafele a tomb vegetol
// eddig a szamig mindig vegig vizsgalgatjuk az elejetol a szomszedos elemeket, es szukseg eseten csereljuk oket (ha egy nagyobb elem megeloz egy kisebbet)
// mikor csere tortenik, a cserelt elem indexet elrakjuk
// ha ez az elem utan nem tortenik csere, akkor minden rendezettnek tekintheto, ami hatra van
// legrosszabb esetben: O(n^2) (ha minden elem rendezetlen)
// legjobb esetben: O(n) (ha minden elem rendezett)
export function javitottBuborek(x, n) {
    let i = n - 1;
    while (i >= 1) {
        let idx = 0; // utolso csere indexe
        for (let j = 0; j <= i - 1; j++) {
            if (x[j] > x[j + 1]) {
                idx = j;
                csere(x, j, j+1);
            }
        }
        i = idx;
    }
}

// BEILLESZTESES
// 1 elemu tomb eleve rendezett
// veszünk egy elemet (2 vagy annal tobb elemu eseten eloszor a masodikat) megnezzuk, hogy kissebb-e mint a tole balra levo,
// ha igen, akkor kicsereljuk oket es ezt folytatjuk visszalepkedve a tomb elejeig
// ezutan veeszük a kovetkezo elemet es ugyanezt vegrehajtjuk, amig nem mentunk at az osszes elemen

// legrosszabb esetben: O(n^2) (ha minden elem rendezetlen)
// legjobb esetben: O(n) (ha minden elem rendezett)
export function beilleszteses(x, n) { // x: tomb, n: egesz
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        while ((j >= 0) && x[j] > x[j+1]) {
            csere(x, j, j+1);
            j--;
        }
    }
}

// JAVITOTT BEILLESZTESES
// kulonbseg: itt cserelgetes helyett eloszor kivesszuk az aktualis elemet, a kivett elemnel nagyobb elemeket hatratologatjuk,
// mikor elertunk a megfelelo helyhez, beillesztjuk
export function javitottBeilleszteses(x, n) { // x: tomb, n: egesz
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        let seged = x[i];
        while ((j >= 0) && x[j] > seged) {
            x[j + 1] = x[j]
            j--;
        }
        x[j+1] = seged;
    }
}

