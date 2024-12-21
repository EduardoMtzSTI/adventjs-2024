import { printTest } from "./scripts.js";

//Reto #1: !Primer regalo repetido
const prepareGifts = (gifts) => {
    if (!gifts) return [];
    const uniqueGifts = [...new Set(gifts)];
    const sortedGifts = uniqueGifts.sort((a, b) => a - b);
    return sortedGifts;
}

export const prepareGiftsTest = () => {

    const gifts1 = [3, 1, 2, 3, 4, 2, 5]
    const preparedGifts1 = prepareGifts(gifts1)
    console.log(preparedGifts1) // [1, 2, 3, 4, 5]
    printTest(JSON.stringify(gifts1), preparedGifts1);

    const gifts2 = [6, 5, 5, 5, 5]
    const preparedGifts2 = prepareGifts(gifts2)
    console.log(preparedGifts2) // [5, 6]
    printTest(JSON.stringify(gifts2), preparedGifts2);

    const gifts3 = []
    const preparedGifts3 = prepareGifts(gifts3)
    console.log(preparedGifts3) // []
    // No hay regalos, la lista queda vacía
    printTest(JSON.stringify(gifts3), preparedGifts3);

    const gifts4 = [1, 111, 101, 103, 4, 2, 5]
    const preparedGifts4 = prepareGifts(gifts4)
    console.log(preparedGifts4) // [?]
    printTest(JSON.stringify(gifts4), preparedGifts4);

}
