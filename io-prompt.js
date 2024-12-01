const rL = require('readline')

const prompt = rL.createInterface({
    input: process.stdin,                                             
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) =>{
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error) {
          reject(error)
        }
    }),
    close: () =>  prompt.close()
}

//prompt.question('Qual seu número favorito? ', (resposta) => {
 //   console.log(`O dobro do seu número favorito é: ${parseInt(resposta) *2}`)
  //  prompt.close()
//})


async function askUser () {

  const numero = await promptPromise.question('Qual é o seu número favorito?: ')
  console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`)

  const cor = await promptPromise.question('Qual sua cor favorita?: ')
  console.log(`sua cor favorita  é: ${(cor)}`)
  promptPromise.close()

}

askUser()