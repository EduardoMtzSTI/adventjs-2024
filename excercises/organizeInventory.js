import { printTest } from "./scripts.js";

//Reto #2: Organizar el inventario
const organizeInventory = (inventory) => {

    //console.log(inventory);

    // Option 1
    // let organizedInventory = {};
    // const categories = [... new Set(inventory.map(toy => toy.category))];

    // categories.forEach(category => {
    //     const toys = inventory.reduce((toys, toy) => {
    //         if (toy.category == category) {
    //             const name = toy.name;
    //             toys[name] == null && (toys[name] = 0);
    //             toys[name] = toy.quantity + toys[name];
    //         }
    //         return toys;
    //     }, {});
    //     console.log(toys)
    //     organizedInventory[category] = toys;
    // });

    // Option 2
    // const categories = [... new Set(inventory.map(toy => toy.category))];

    // const organizedInventory = categories.reduce((organizedInventory, category) => {
    //     const toys = inventory.reduce((toys, toy) => {
    //         if (toy.category == category) {
    //             const name = toy.name;
    //             toys[name] == null && (toys[name] = 0);
    //             toys[name] = toy.quantity + toys[name];
    //         }
    //         return toys;
    //     }, {});
    //     organizedInventory[category] = toys;
    //     return organizedInventory;
    // }, {});

    // Option 3
    // const organizedInventory =
    //     [... new Set(inventory.map(toy => toy.category))]
    //         .reduce((organizedInventory, category) => {
    //             const toys = inventory.reduce((toys, toy) => {
    //                 if (toy.category == category) {
    //                     const name = toy.name;
    //                     toys[name] == null && (toys[name] = 0);
    //                     toys[name] = toy.quantity + toys[name];
    //                 }
    //                 return toys;
    //             }, {});
    //             organizedInventory[category] = toys;
    //             return organizedInventory;
    //         }, {});

    // Option 4
    // const categories = [... new Set(inventory.map(toy => toy.category))];
    // return categories.reduce((organizedInventory, category) => {
    //     organizedInventory[category] = inventory.reduce((toys, toy) => {
    //         if (toy.category == category) {
    //             const name = toy.name;
    //             toys[name] == null && (toys[name] = 0);
    //             toys[name] = toy.quantity + toys[name];
    //         }
    //         return toys;
    //     }, {});
    //     return organizedInventory;
    // }, {});


    // console.log(organizedInventory);
    // return organizedInventory;

    //Option 5
    return inventory.reduce((inventory, toy) => {

        const { category, name, quantity } = toy;
        !inventory[category] && (inventory[category] = {});
        !inventory[category][name] && (inventory[category][name] = 0);
        inventory[category][name] += quantity;
        return inventory;

    }, {});

}

const test = (eva, fn) => {
    const inicio = performance.now();
    const result = fn(eva)
    const fin = performance.now();
    const time = (fin - inicio).toFixed(3)
    console.log(result)
    printTest(JSON.stringify(eva), JSON.stringify(result), time)
}

export const organizarInventoryTest = () => {
    const inventary = [
        { name: 'doll', quantity: 5, category: 'toys' },
        { name: 'car', quantity: 3, category: 'toys' },
        { name: 'ball', quantity: 2, category: 'sports' },
        { name: 'car', quantity: 2, category: 'toys' },
        { name: 'racket', quantity: 4, category: 'sports' }
    ]
    test(inventary, organizeInventory);
    // Resultado esperado:
    // {
    //   toys: {
    //     doll: 5,
    //     car: 5
    //   },
    //   sports: {
    //     ball: 2,
    //     racket: 4
    //   }

    const inventary2 = [
        { name: 'book', quantity: 10, category: 'education' },
        { name: 'book', quantity: 5, category: 'education' },
        { name: 'paint', quantity: 3, category: 'art' }
    ]

    test(inventary2, organizeInventory);
    // Resultado esperado:
    // {
    //   education: {
    //     book: 15
    //   },
    //   art: {
    //     paint: 3
    //   }
    // }

    const inventary3 = []
    test(inventary3, organizeInventory);

}

