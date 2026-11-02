let semana = 0
let dinheiro = 0
let total = 0


while (total < 300){

    dinheiro = parseInt(prompt(("Digite quanto tu ganhou essa semana: ")))
    if(dinheiro <= 0){
        alert("Zero não pode fela da puta.")
    }
    else{
    total = total + dinheiro
    semana++
    alert("Você tem "+total+" guardado.")
}
    if(total >= 300){
        alert("Já da pra comprar, tu levou "+ semana +" semanas para conseguir o money.")
    }
    else{}
}