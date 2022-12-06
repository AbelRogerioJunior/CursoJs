var idade = 22
console.log(`Com ${idade} anos  voce `)
if(idade < 16)
{
    console.log(`Nao vota`)
}
else if(idade < 18 || idade > 65){
    console.log(`tem voto Opcional`)
}else{
    console.log('e obrigado a votar')
}