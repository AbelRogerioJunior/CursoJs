let val = document.getElementById('txtval')
let sel = document.getElementById('selval')
let res = document.getElementById('res')
let guardaVal = []


function isNumero(n)
{
    if(Number(n) >=1 && Number(n) <= 100)
    {
        return true
    }
    else{
        return false
    }
}

function inlista(n, lista)
{
    if(lista.indexOf(Number(n)) != -1)
    {
        return true
    }
    else{
        return false
    }
}
 
function addval(lista)
{
    if(isNumero(val.value) && !inlista(val.value, guardaVal))
    {
        guardaVal.push(Number(val.value))
        let item = document.createElement('option')
        item.text = `Valor ${val.value} Adicionado`
        sel.appendChild(item)
    }
    else
    {
        window.alert('Valores invalido ou existente na lista')
    }
}

function calcular()
{
    let maior = 0
    let menor = 0
    let soma = 0
    for(var i = 0; i < guardaVal.length;i++)
    {
        soma +=guardaVal[i]
        if(i == 0)
        {
            maior = guardaVal[i]
            menor = guardaVal[i]
        }
        else{
            if(maior < guardaVal[i])
            {
                maior = guardaVal[i]
            }

            if(menor > guardaVal[i])
            {
                menor = guardaVal[i]
            }
        }
    }
    let quantVal = guardaVal.length
    var media = soma/ quantVal
    res.innerHTML = `Ao todo temos <strong>${quantVal}</strong> valores inseridos <br> A soma dos elementos do vetor e <strong>${soma}</strong> <br> O maior valor e <strong> ${maior}</strong> <br> O menor valor e <strong>${menor}</strong> <br> A Media do Valores e <strong>${media}</strong>`
}