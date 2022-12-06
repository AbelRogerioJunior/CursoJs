function contar()
{
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[Erro]! Faltam dados.')
    }
    else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
           for(let c= i; c <= f;c+=p)
            {
                if(i == f-1)
                {
                    res.innerHTML +=`${c} \u{1F3C1}`
                }
                else
                {
                    res.innerHTML +=`${c} \u{1F449}`
                }
            } 
        }
        else if(i > f)
        {
            for(let c= i; c >= f;c-=p)
            {
                if(i == f-1)
                {
                    res.innerHTML +=`${c} \u{1F3C1}`
                }
                else
                {
                    res.innerHTML +=`${c} \u{1F449}`
                }
            } 
        }
        else{
            res.innerHTML = 'Impossivel contar!'
        }          
    }
}