/*
* - ez egy uj vezerlesi szerkezetnek szamit a tobbi mellett
* */

// Rekurzív algoritmusok jellemzői.
/*
*  - onmagukat meghivo fuggvenyek
*  - kell biztositani egy leallito esetet (alapeset), ez az a resze a fuggvenynek, ahol nem tortenik tobb rekurziv hivas
*  - a rekurziv hivasok soran a fuggvenyek parameterei folyamatosan valtoznak
*
* */


// Példák rekurzióra:
// faktoriális,
export function faktorialis(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * faktorialis(n - 1);
    }
}
// Fibonacci számok.

export function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

// hatványozás,
export function hatvany(a, n) {
    if (n === 1) {
        return a;
    } else {
        return a * hatvany(a, n-1);
    }
}
// Hanoi tornyai.


// Keresések rekurzív megvalósítása.