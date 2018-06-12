// expected data bundle: 
// {text: str, reverse: bool, shuffle: bool, chunkSize: str}

export function pipe (data, fns) {
    // nests the functions together, no limit
    return fns.reduce((acc, next) => {
        return next(acc);
    }, data);
}

export function splitText (data) {
    data.result = data.text.split(' ');
    return data;
}

export function reverseCut (data) {
    if( data.reverse ){
        data.result = data.result.reverse();
    }
    return data;
}

export function chunkCut (data) {
    let { result } = data;
    let chunk = Number( data.chunkSize );

    let arrayCopy = [];
    // loop over future length of copied array
    for(let i = 0; i < result.length/chunk; i++){
        // init empty array at [i]
        arrayCopy[i] = [];
        // loop over original array & push each to [i]
        for(let j = i*chunk; j < i*chunk+chunk; j++){
            arrayCopy[i].push(result[j]);
        }
        // merge all arrays on [i] into string
        arrayCopy[i] = arrayCopy[i].join(' ');
    }
    //trim extra space from last entry if necessary
    arrayCopy[arrayCopy.length-1] = arrayCopy[arrayCopy.length - 1].trim();
    data.array = arrayCopy;
    return data;
}

export function shuffleCut (data) {
    if( data.shuffle ){
        let arrayCopy = data.array.slice();
        // shuffle array using fisher-yates algorithm
        for(let idx1 = arrayCopy.length-1; idx1 > 0; idx1--){
            let idx2 = Math.floor(Math.random()*(idx1+1));
            [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
        }
        data.result = arrayCopy;
    }
    return data;
}
