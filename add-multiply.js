
// add and multiply the numbers using function .

function wood(tableQuantity, chairQuantity, bedQuantity) {
    const perTableQuantity = 10;
    const perChairQuantity = 3;
    const perBedQuantity = 50;

    let chairSpace = chairQuantity * perChairQuantity;
    let tableSpace = tableQuantity * perTableQuantity;
    let bedSpace = bedQuantity * perBedQuantity;

    let totalSpace = chairSpace + tableSpace + bedSpace
    return totalSpace
}


const woodNeedSpace = wood(1, 2, 3);
console.log(woodNeedSpace);