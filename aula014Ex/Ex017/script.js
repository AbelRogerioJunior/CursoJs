function calcular()
{
    var valor = document.getElementById('txtval')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    
    if(valor.value.length == 0)
    {
        window.alert('Por favor digite um numero!')
    }
    else
    {
        var n = Number(valor.value)
        tab.innerHTML = ''
        for(var i = 0; i <= 10;i++)
        {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }



}