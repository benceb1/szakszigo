export function preorder(p) {
    if (p !== null) {
        feldolgoz(p);
        preorder(p.bal)
        preorder(p.jobb)
    }
}

export function inorder(p) {
    if (p !== null) {
        inorder(p.bal)
        feldolgoz(p);
        inorder(p.jobb)
    }
}

export function postorder(p) {
    if (p !== null) {
        postorder(p.bal)
        postorder(p.jobb)
        feldolgoz(p);
    }
}

function feldolgoz(p) {
    console.log(p)
}