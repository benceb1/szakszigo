export function osszefuttatas(x1, n1, x2, n2) {
    let y = new Array(n1 + n2);
    let i = 0;
    let j = 0;
    let db = -1;
    while (i < n1 && j < n2) {
        db++;
        if (x1[i] < x2[j]) {
            y[db] = x1[i];
            i++;
        } else {
            if (x2[j] > x1[i]) {
                y[db] = x2[j];
                j++;
            } else  {
                y[db] = x1[i];
                i++;
                j++;
            }
        }
    }
    while (i < n1) {
        db++;
        y[db] = x1[i];
        i++;
    }
    while (j < n2) {
        db++;
        y[db] = x2[j];
        j++;
    }
    return y; // db-t is visszaadjuk pszeudoban
}

export function szetvalogatas(x, n, P) {
    let y1 = new Array(n);
    let y2 = new Array(n);
    let db1 = 0;
    let db2 = 0;
    for (let i = 0; i < n; i++) {
        if (P(x[i])) {
            y1[db1] = x[i];
            db1++;
        } else {
            y2[db2] = x[i];
            db2++;
        }
    }
    return [y1, y2];
}

export function szetvalogatasOsszetett(x, n, P) {
    let bal = 0;
    let jobb = n - 1;
    let seged = x[0];
    while( bal < jobb) {
        while((bal < jobb) && !P(x[jobb])) {
            jobb--;
        }
        if (bal < jobb) {
            x[bal] = x[jobb];
            bal++

            while((bal < jobb) && P(x[bal])) {
                bal++;
            }
            if (bal < jobb) {
                x[jobb] = x[bal];
                jobb--;
            }
        }
    }
    x[bal] = seged;
    let db;
    if (P(x[bal])) {
        db = bal;
    } else {
        db = bal - 1;
    }
    return db;
}