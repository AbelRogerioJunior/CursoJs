
function parimpar(n)
{
    if(n % 2 == 0)
    {
        return 'par'
    }
    else
    {
        return 'impar'
    }
}

var valor = parimpar(5)
console.log(valor)