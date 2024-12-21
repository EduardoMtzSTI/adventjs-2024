import { printTest } from "./scripts.js";

//Reto #2: Enmarcando nombres
const createFrame = (names) => {
    const maxLengthName = names.reduce((max, name) => Math.max(max, name.length), 0);

    const border = "*".repeat(maxLengthName + 4);

    return names.reduce((frame, name) =>
        frame += `* ${name} ${" ".repeat(maxLengthName - name.length)}*\n`
        , border + "\n") + border;
}

const test = (eva, fn) => {
    const inicio = performance.now();
    const result = fn(eva)
    const fin = performance.now();
    const time = (fin - inicio).toFixed(3)
    console.log(result)
    printTest(JSON.stringify(eva), result, time)
}

export const createFrameTest = () => {

    const eval1 = ['midu', 'madeval', 'educalvolpz']
    test(eval1, createFrame);
    // Resultado esperado:
    // ***************
    // * midu        *
    // * madeval     *
    // * educalvolpz *
    // ***************

    const eval2 = ['midu']
    test(eval2, createFrame);
    // Resultado esperado:
    // ********
    // * midu *
    // ********

    const eval3 = ['a', 'bb', 'ccc']
    test(eval3, createFrame);
    // Resultado esperado:
    // *******
    // * a   *
    // * bb  *
    // * ccc *
    // *******

    const eval4 = ['a', 'bb', 'ccc', 'dddd']
    test(eval4, createFrame);

    const eval5 = []
    test(eval5, createFrame);


}