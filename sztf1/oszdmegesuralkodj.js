// Oszd meg és uralkodj!” elvű algoritmusok: Oszd meg és uralkodj elv,
// - nagy problemat tobb kissebb reszproblemara osztunk fel es azokat megoldogatjuk es vegul abbol megszuletik a nagy megoldas

// maximumkiválasztás,

//sorozatszamitas algoritmus
export function sorozatszamitas(x, n) {
    let ertek = 0;
    for (let i = 0; i < n; i++) {
        ertek += x[i]
    }
    return ertek;
}




// kimenet: max elem indexe
export function maxKivalaszt(x, bal, jobb) {
    if (bal === jobb) {
        return bal;
    } else {
        let center = Math.floor((bal + jobb) / 2);
        let balmax = maxKivalaszt(x, bal, center);
        let jobbmax = maxKivalaszt(x, center + 1, jobb);
        if (x[balmax] > x[jobbmax]) {
            return balmax;
        } else {
            return jobbmax;
        }
    }
}

// O(n * log n)
export function osszefesuloRendezes(x, bal, jobb) {
    if (bal < jobb) {
        let center = Math.floor((bal + jobb) / 2);
        osszefesuloRendezes(x, bal, center);
        osszefesuloRendezes(x,center + 1, jobb)
        osszefesul(x, bal, center, jobb);
    }
}

function osszefesul(x, bal, center, jobb) {
    let n1 = center - bal + 1;
    let n2 = jobb - center;
    let y1 = new Array(n1 + 1);
    for (let i = 0; i < n1; i++) {
        y1[i] = x[bal + i]
    }
    let y2 = new Array(n2);
    for (let i = 0; i < n2; i++) {
        y2[i] = x[center + i + 1];
    }
    y1[n1] = 10000; // pszeudoban n1 + 1
    y2[n2] = 10000; // ex n2 + 1
    let i = 0;
    let j = 0;
    for (let k = bal; k <= jobb; k++) {
        if (y1[i] < y2[j]) {
            x[k] = y1[i];
            i++;
        } else {
            x[k] = y2[j];
            j++;
        }
    }

}

// Merge sort (összefésülő rendezés),
// - Ordo n logn
function szetvalogat(x, bal, jobb)  {
    let seged = x[bal]; // elso elem a tampont elem
    while (bal < jobb) {
        while ((bal < jobb) && (x[jobb] > seged)) {
            jobb--;
        }
        if (bal < jobb) {
            x[bal] = x[jobb];
            bal++;
            while ((bal < jobb) && (x[bal] <= seged)) {
                bal++;
            }
            if (bal < jobb) {
                x[jobb] = x[bal];
                jobb--;
            }
        }
    }
    let idx = bal;
    x[idx] = seged;
    return idx;
}

export function gyorsrendezes(x, bal, jobb) {
    let idx = szetvalogat(x, bal, jobb);
    // ezutan meghivja magat a tomb maradek 2 felere az idx elemet nem beleertve, mert az mar a helyen van
    if (idx > bal + 1) {
        gyorsrendezes(x, bal, idx -1);
    }
    if ( idx < jobb - 1) {
        gyorsrendezes(x, idx + 1, jobb);
    }
}


// Quicksort (gyorsrendezés),
// k-adik legkisebb elem meghatározása,
// a Quicksort algoritmus őrszem elemének kiválasztása.