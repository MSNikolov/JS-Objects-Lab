function jsonify(params){
    let towns = [];
    for (i = 1; i < params.length; i++){
        let town = params[i].split("|");
        let lat = Number(town[2])
        let long = Number(town[3])
        towns.push({
            Town: town[1].trim(),
            Latitude: Number(lat.toFixed(2)),
            Longitude: Number(long.toFixed(2))
        })
    }

    return JSON.stringify(towns)
}

console.log(jsonify(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

))