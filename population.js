function count(params){
    let result = {};

    for (i = 0; i < params.length; i++){
        let townArr = params[i].split(" <-> ");

        let names = Object.keys(result);

        if (!names.includes(townArr[0])){
            Object.defineProperty(result, townArr[0], {value: Number(townArr[1]), writable: true, configurable: true, enumerable: true})
        }

        else{
            result[townArr[0]] += Number(townArr[1])
        }
    }

    let res = "";

    let townNames = Object.keys(result);

    for (i = 0; i < townNames.length; i++){
        res += `${townNames[i]} : ${result[townNames[i]]}\n`
    }

    return res;
}

console.log(count(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

))