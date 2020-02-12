function count(params){
    let matches = params[0].match(/[A-Za-z]+/gim)

    let result = {};

    for (i = 0; i < matches.length; i++){
        let keys = Object.keys(result)

        if (!keys.includes(matches[i])){
            Object.defineProperty(result, matches[i], {value: 0, configurable: true, enumerable: true, writable: true})
        }

        result[matches[i]]++;
    }

    return JSON.stringify(result)
}

console.log(count(['JS devs use Node.js for server-side JS.-- JS for devs']))