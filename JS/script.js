// Function  bir array qebul edir, arrayin her bir elementini 5e vurub bize qayatarir, ve ya 2 cixir bize qaytarir.
// Meselecun:
// [1,2,3,4] bi denede callback function gonderirem ki, arrayin indekslerin 2ye vurub mene geri qaytarsin  =>[2,4,6,8]
// yeniden men hemen arrayin indekslerinde 2 cixmaq isteyiremsede mene [-1,0,1,2] qaytarsin.
// Callback functiondan istifade etmeyinizi isteyirem...

function operate(arr, callback) {
    // let result = 0;
    // for (const item of arr) {
    //     if(callback(item)){
    //         result +=item
    //     }
    // }
    // return result
    return callback(arr);
}

function multi(num){
    const result = [];
    for(let i = 0 ; i < num.length; i++) {
        result.push(num[i] * 5)
    }
    return result;
}

function differ(num){
    const result = [];
    for(let i=0 ; i < num.length; i++){
        result.push(num[i] - 2)
    }
    return result
}

function indexMulti(num){
    const result = [];
    for(let i = 0; i < num.length; i++){
        result.push(i - 2)
    }
    return result
}

console.log(operate([2,3,4],multi));
console.log(operate([8,9,10], differ))
console.log(operate([0,1,2,3,4], indexMulti))