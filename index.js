function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(){
    return function named (){
        console.log("He is a good day")
    }
}

function returnsAnAnonymousFunction() {
    return function (){}
}
