function findLowest(params){
    let prices = {};

    for (i = 0; i < params.length; i++){
        let current = params[i].split(" | ");

        let products = Object.keys(prices);

        if (!products.includes(current[1])){
            Object.defineProperty(prices, current[1], {value: {}, configurable: true, writable: true, enumerable: true});
            Object.defineProperty(prices[current[1]], current[0], {value: Number(current[2]), configurable: true, writable: true, enumerable: true});
        }

        else{
            let towns = Object.keys(prices[current[1]]);

            if (!towns.includes(current[0])){
                Object.defineProperty(prices[current[1]], current[0], {value: Number(current[2]), configurable: true, writable: true, enumerable: true});
            }

            else{
                prices[current[1]][current[0]] = Number(current[2])
            }
        }


    }

    let res = ""

    let products = Object.keys(prices);

    for (i = 0; i < products.length; i++){
        let lowest = 213894545;

        let town = "";

        let towns = Object.keys(prices[products[i]]);

        for (j = 0; j < towns.length; j++){
            if (prices[products[i]][towns[j]] < lowest){
                lowest = prices[products[i]][towns[j]];

                town = towns[j];
            }
        }

        res += `${products[i]} -> ${lowest} (${town})\n`
    }

    return res;
}

console.log(findLowest(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
))