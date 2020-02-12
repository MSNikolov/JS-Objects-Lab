function convert (json){
    let entries = JSON.parse(json);

    let heading = Object.keys(entries[0]);

    let result = `<table>\n`;

    result += `   <tr>`

    for (i = 0; i < heading.length; i++){
        result += `<th>${heading[i]}</th>`
    }

    result += `</tr>\n`

    for (i = 0; i < entries.length; i++){
        let row = `   <tr>`

        let values = Object.values(entries[i]);

        for (j = 0; j < values.length; j++){
            row += `<td>${values[j]}</td>`
        }

        row += `</tr>\n`

        result += row;
    }

    result += `</table>`

    return result
}

console.log(convert(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']
))