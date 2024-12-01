const rL = require('readline')

const prompt = rL.createInterface({
    input: process.stdin,                                             
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) new Promise((resolve, reject) =>{
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error) {
          reject(error)
        }
    }),
    close: prompt.close
}

prompt.question('Qual seu número favorito? ', (resposta) => {
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) *2}`)
    prompt.close()
})

