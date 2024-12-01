const rL = require('readline')

const prompt = rL.createInterface({
    input: process.stdin,                                             
    output: process.stdout
})

prompt.question('Qual seu número favorito? ', (resposta) => {
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) *2}`)
})