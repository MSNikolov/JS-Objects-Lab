function calc (params){
    let towns = {};

    for (i = 0; i < params.length; i++){
        let sale = params[i].split(" -> ");

        let saleParameters = sale[2].split(" : ")

        let salePrice = Number(saleParameters[0])*Number(saleParameters[1])

        let townNames = Object.keys(towns);

        if (!townNames.includes(sale[0])){
            Object.defineProperty(towns, sale[0], {value: {}, enumerable: true, writable: true, configurable: true})
            Object.defineProperty(towns[sale[0]], sale[1], {value: salePrice, enumerable: true, writable: true, configurable: true})
        }

        else{
            let productsInTown = Object.keys(towns[sale[0]])
            if (!productsInTown.includes(sale[1])) {
                Object.defineProperty(towns[sale[0]], sale[1], {
                    value: salePrice,
                    enumerable: true,
                    writable: true,
                    configurable: true
                })
            }

            else{
                towns[sale[0]][sale[1]] += salePrice
            }

        }
    }

    let result = ""

    let townNames = Object.keys(towns)

    for (i = 0; i < townNames.length; i++){
        result += `Town - ${townNames[i]}\n`

        let products = Object.keys(towns[townNames[i]])

        for (j = 0; j < products.length; j++){
            result += `$$$${products[j]} : ${towns[townNames[i]][products[j]]}\n`
        }
    }

    return result
}

console.log(calc(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
))