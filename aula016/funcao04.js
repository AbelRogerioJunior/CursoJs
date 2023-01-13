// 5! = 5 x 4 x 3 x 2 x 1

function factorial(n){
    var fact = 1;
    for(var i = 1; i <= n;i++)
    {
        fact*=i
    }
    return fact
}


console.log(factorial(5))