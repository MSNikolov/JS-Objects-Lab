function score (json){
    let scores = JSON.parse(json);

    let result = "<table>\n" +
        "  <tr><th>name</th><th>score</th></tr>\n";

    for (i = 0; i < scores.length; i++){
        result += `   <tr><td>${scores[i].name}</td><td>${scores[i].score}</td></tr>\n`
    }

    result += `</table>`

    return result
}

console.log(score(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']
))