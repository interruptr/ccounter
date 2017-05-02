import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
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

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (product) => {
  return replaceAll(product.name, ' ', '-');
};

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static saveProduct(product) {
    product = Object.assign({}, product); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProductNameLength = 1;
        if (product.name.length < minProductNameLength) {
          reject(`Name must be at least ${minProductNameLength} characters.`);
        }

        if (product.id) {
          const existingProductIndex = products.findIndex(a => a.id == product.id);
          products.splice(existingProductIndex, 1, product);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new products in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          product.id = generateId(product);
          products.push(product);
        }

        resolve(product);
      }, delay);
    });
  }

  static deleteProduct(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProductToDelete = products.findIndex(product => {
          product.id == productId;
        });
        products.splice(indexOfProductToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProductApi;
