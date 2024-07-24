//# 1️⃣ Desafio Classificador de nível de Herói

//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = 'Rei Arthur'
let xpHeroi = 10000

console.log('O Herói:', nomeHeroi,'por conta do seu XP', xpHeroi,'está na classe:')

switch(xpHeroi){
    case 0 <= 1000:
    console.log('Ferro')

    case 1001 <= 2000:
        console.log('Bronze')
    
    case 2001 < 5000:
        console.log('Prata')
    
    case 6001 <= 7000:
        console.log('Ouro')

    case 7001 <= 8000:
        console.log('Platina')

    case 8001 <= 9000:
        console.log('Ascendente')

    case 9001 <= 10000:
        console.log('Imortal')
    
    default:
        console.log('Radiante')
}

