function get (params){

    let result = [];

    for (i = 0; i < params.length; i++){
        let matches = params[i].match(/[A-Za-z]+/gim)

        for (j = 0; j < matches.length; j++){
            if (!result.includes(matches[j].toLowerCase())){
                result.push(matches[j].toLowerCase());
            }
        }
    }

    return result.join(", ")
}

console.log(get(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
))