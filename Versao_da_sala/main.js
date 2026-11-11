// const PASSWORD = "pao123"
// let attempts = 0


// while (attempts < 3){
//     let enter_password = prompt("Digite a senha: ")

//     console.log("Dinheiro que tu deve pra receita: ", attempts)


//     attempts++

//     if(enter_password == PASSWORD){
//         alert("Conectado, bão cafézes!")
//         break
//     } else{
//         alert("Senha incorreta! >:C")
//     }

//     attempts++
// }

// if (attempts >= 3){
//     alert("Errou tudo as senha cabaço, vaza daqui.")
// }
// else{}


// alert("captive portal Padaria")

// console.log("debugaddo");


// // ------------------ RetroespecitviosadeSADA RAAAAAAAH ------------------

// let contagem = 10

// while(contagem > 0){
//     alert(contagem + " até Feliz Ano Novo!")

//     contagem --

// }
// if (contagem == 0 ){
//     alert("FELIZ NOVO ANO VELHO!!!!!!")
// }
// else{}


// // Cofrinho do pedoca ( ͡° ͜ʖ ͡°)

let money = 0   
let semana = 0
let offset = 300



while (offset <= 300){
    money =  prompt("Quantos dinheiros tu fez essa semana? ")
    offset = offset-money
    alert("Faltam: "+ offset)
    semana++
    if(offset <= 0){
        alert("tu levou "+ semana + " semanas, hora de botar a mão no cofrinho ( ͡° ͜ʖ ͡°)")
    }
    else{}
}


