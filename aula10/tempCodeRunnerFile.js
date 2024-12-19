const path = require('node:path')
const fs = require('node:fs')

const filePath = path.join(process.cwd(), 'texto.txt')
console.log(filePath)

fs.readFile(filePath, {}, (erro, dados) => {
  if(erro) {
     console.log(`Erro na leitura do arquivo no caminho ${filePath}`)
     return
  }
  const texto = dados.toString()
  const linhas = texto.split('\n')


  linhas.forEach((linha, index, arrayeDeLinhas) =>
    console.log(`${index} - ${linha} `)
    )

  console.log(dados.toString())
})

