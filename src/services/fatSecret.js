const delay = 1000;
const products = [
    {
        id: 1,
        name: "Oats",
        calories: 387,
        macros: {
            protein: 9,
            carbs: 63,
            fat: 6
        }
    },
    {
        id: 2,
        name: "Fish",
        calories: 140,
        macros: {
            protein: 19,
            carbs: 2,
            fat: 6
        }
    },
    {
        id: 3,
        name: "Greens",
        calories: 24,
        macros: {
            protein: 9,
            carbs: 24,
            fat: 0
        }
    },
    {
        id: 4,
        name: "Pork",
        calories: 160,
        macros: {
            protein: 18,
            carbs: 0,
            fat: 9
        }
    }
];

class ProductApi {
    static get(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find((element) => element.id === id));
            }, delay);
        })
    }

    static getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], products));
            })
        });
    }

    static save() {
        // TODO
    }

    static destroy() {
        // TODO
    }
}

export default ProductApi;