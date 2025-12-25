function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
// for allowing outside 
module.exports.add = add;
module.exports.sub = sub;
// exports.add = add and exports.sub=sub also works

// other way
// exports.add =function add(a,b){
//     return a+b;
// }
