function calculate (params){
    let towns = {};

    for (i = 0; i < params.length; i+=2){
        let keys = Object.keys(towns)

        if (!keys.includes(params[i])){
            Object.defineProperty(towns, params[i], {value: 0, enumerable: true, writable: true, configurable: true})
            }

        towns[params[i]] += Number(params[i + 1]);
        }

    return JSON.stringify(towns)
}

console.log(calculate(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4']

))