function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function named(){

    }

}
const returnsAnAnonymousFunction = fn => function(){}