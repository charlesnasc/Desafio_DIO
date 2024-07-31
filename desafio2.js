
let rank = matchesPlayed(158, 9)

function matchesPlayed(victories, loses){
    let rankResult = victories - loses
    return rankResult
}

switch(true){
    case (rank <= 10):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Ferro`)
        break 
    case (rank >= 11 && rank <= 20):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Bronze`)
        break
    case (rank >= 21 && rank <= 50):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Prata`)
        break
    case (rank >= 51 && rank <= 80):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Ouro`)
        break
    case (rank >= 81 && rank <= 90):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Diamante`)
        break
    case (rank >= 91 && rank <= 100):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Lendário`)
        break
    case (rank >= 101):
        console.log(`O Herói tem o saldo de ${rank} vitórias e está no nível: Imortal`)
        break
}