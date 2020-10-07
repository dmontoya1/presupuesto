export const checkBudget = ( budget, remainig) => {
    let clase;

    if ((budget / 4) > remainig){
        clase = 'alert alert-danger'
    } else if ((budget / 2) > remainig) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}